import {props, isArrayType} from './schema';
import {write} from './write';
import {article, code, hasOwnProperty, isArray, link} from './util';

export function generateDoc(schema, api, path, prefix) {
  // build documentation page for each top-level method
  const jobs = Object.keys(api).map(key => {
    let name = key;
    if (key.startsWith('_')) {
      return; // skip private methods
    } else if (key.startsWith('$')) {
      name = key.slice(1);
    }
    const def = props(schema, {$ref: '#/definitions/' + api[key].def});
    return write(`${path}/${name}.md`, docMethod(name, api[key], def, prefix));
  });

  // build index of top-level methods
  jobs.push(write(`${path}/index.md`, docIndex(api, docIndexEntry, prefix)));

  return Promise.all(jobs);
}

function docIndex(api, generate, prefix) {
  // group into sections
  const sec = {};

  Object.keys(api).forEach(k => {
    const ref = api[k].doc;
    (sec[ref] || (sec[ref] = [])).push(k);
  });

  let code = '## Vega-Lite API Reference\n';

  Object.keys(sec).forEach(ref => {
    code += `\n### ${ref}\n\n`;

    sec[ref].forEach(name => {
      if (name.startsWith('_')) {
        // skip private methods
      } else if (name.startsWith('$')) {
        code += generate(name.slice(1), api[name], prefix);
      } else {
        code += generate(name, api[name], prefix);
      }
    });
  });

  return code;
}

function docIndexEntry(name, spec, prefix) {
  return `- <a href="${name}">${prefix || ''}<b>${name}</b></a> - ${spec.desc || ''}\n`;
}

function docMethod(name, spec, schema, prefix) {
  let code = docMethodEntry(name, spec, prefix);

  if (spec.ctr) {
    const call = spec.ctr.call;
    code += `Returns a ${link(call)} instance.\n`;
    return code;
  }

  code += '\n';

  const props = collectProperties(spec, schema);

  if (!props.length) {
    // no properties, exit early
    return code;
  }

  // -- METHOD INDEX ----
  code += `## <code>${name}</code> Method Overview\n\n`;

  props.forEach(p => {
    let [prop] = p;
    code += `* <a href="#${prop}">${prop}</a>\n`;
  });

  code += '\n';

  // -- METHOD REFERENCE --
  code += `## <code>${name}</code> API Reference\n\n`;

  props.forEach(p => {
    let [prop, def] = p;

    let args = def ? docArguments(def.arg)
      : (isArrayType(schema[prop]) ? '...' : '') + 'value';

    code += `<a id="${prop}" href="#${prop}">#</a>
<em>${name}</em>.<b>${prop}</b>(<em>${args}</em>)\n`;

    const desc = docDescription(prop, schema, def);
    if (desc) code += '\n' + desc + '\n';
    code += '\n';
  });

  return code;
}

function collectProperties(spec, schema) {
  const ext = spec.ext || {};
  const props = [];

  let prop;

  for (prop in ext) {
    if (ext[prop] != null) props.push([prop, ext[prop]]);
  }
  for (prop in spec.pass) {
    if (spec.pass[prop] != null) props.push([prop, spec.pass[prop]]);
  }
  for (prop in spec.call) {
    if (spec.call[prop] != null) props.push([prop, spec.call[prop]]);
  }
  for (prop in schema) {
    if (hasOwnProperty(ext, prop)) continue; // skip if extension defined
    props.push([prop]);
  }

  props.sort((a, b) => {
    const u = a[0];
    const v = b[0];
    return u < v ? -1 : u > v ? 1 : 0;
  });

  return props;
}

function docMethodEntry(name, spec, prefix) {
  let desc = `${prefix || ''}<b>${name}</b>(<em>${docArguments(spec.arg)}</em>)
${spec.desc ? '\n' + spec.desc : ''}`;

  if (spec.type) {
    desc += '\n' + docTypeSwitch(null, spec.type);
  }

  return desc + '\n';
}

function docArguments(args) {
  return args ? args.map(docArgPrefix).join(', ') : '...values';
}

function docArgPrefix(arg) {
  if (arg == null) return '';
  if (Array.isArray(arg)) arg = arg[0];
  if (arg.startsWith('^')) arg = arg.slice(1);
  if (arg.startsWith('_')) arg = arg.slice(1);

  return arg.startsWith('...')
      || arg.startsWith(':::')
      || arg.startsWith('+::')
      || arg.startsWith('+++') ? '...' + arg.slice(3) : arg;
}

function docDescription(prop, schema, spec) {
  let desc = (spec && spec.desc)
    || (schema && schema[prop] && schema[prop].description);

  if (spec && spec.type) {
    desc += '\n' + docTypeSwitch(prop, spec.type);
  }

  return desc;
}

function docTypeSwitch(prop, types) {
  let desc = '\nThe behavior of this method depends on the argument type:\n\n';

  docCollectTypes(types).forEach(t => {
    desc += `- If the argument is ${article(t.type)} ${code(t.type + (t.array ? ' array' : ''))}, sets the ${code((prop ? prop + '.' : '') + t.key)} property.\n`;
  });

  desc += prop
    ? `- Otherwise, sets the ${code(prop)} property.`
    : `- Otherwise, sets the properties defined on the input argument(s), if provided.`;

  return desc;
}

function docCollectTypes(types) {
  const out = [];

  // isolate type mapping object
  types = isArray(types) ? types[0] : types;

  // collect type entries, recurse for mapped arrays
  for (let t in types) {
    if (types[t].key) {
      out.push({type: t, key: types[t].key});
    } else if (types[t].map) {
      const map = types[t].map;
      for (let m in map) {
        out.push({type: m, array: true, key: map[m].key});
      }
    }
  }

  // sort type-parameterized entries
  out.sort((a, b) => a.array ^ b.array ? -1 + 2 * +a.array
      : a.type < b.type ? -1 : a.type > b.type ? 1 : 0);

  return out;
}

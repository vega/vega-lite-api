import {write} from './write';

export function generateDoc(schema, api, path, prefix) {
  return write(`${path}/index.md`, docIndex(api, docIndexEntry, prefix));
}

function docIndex(api, generate, prefix) {
  // group into sections
  const sec = {};

  Object.keys(api).forEach(k => {
    const ref = api[k].doc;
    (sec[ref] || (sec[ref] = [])).push(k);
  });

  let code = '## API Reference\n';

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
  return `- ${prefix}<b>${name}</b> - ${spec.desc || ''}\n`;
}

/*
function docMethodEntry(name, spec, prefix) {
  return `${prefix}<b>${name}</b>(<em>${docArguments(spec.arg)}</em>)
${spec.desc ? spec.desc + '\n' : ''}\n`;
}

function docArguments(args) {
  return args ? args.map(docArgPrefix).join(', ') : '...values';
}

function docArgPrefix(arg) {
  if (Array.isArray(arg)) arg = arg[0];
  if (arg.startsWith('^')) arg = arg.slice(1);
  if (arg.startsWith('_')) arg = arg.slice(1);

  return arg.startsWith('...')
      || arg.startsWith(':::')
      || arg.startsWith('+::')
      || arg.startsWith('+++') ? '...' + arg.slice(3) : arg;
}
*/

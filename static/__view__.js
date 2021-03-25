export var _vegalite;
export var _vega;
var _opt;

// TODO: validation

function options(...viewopt) {
  const opt = Object.assign({}, _opt);
  opt.view = Object.assign({}, _opt.view, ...viewopt);
  if (opt.view.spec) {
    opt.spec = opt.view.spec;
    delete opt.view.spec;
  }
  return opt;
}

function element() {
  return typeof document === 'undefined' ? undefined
    : document.createElement('div');
}

function createSpec(self) {
  const major = _vegalite ? _vegalite.version.split('.')[0] : '5';
  return Object.assign(
    {$schema: `https://vega.github.io/schema/vega-lite/v${major}.json`},
    self.toObject()
  );
}

function createView(self, opt) {
  if (!_vegalite || !_vega) {
    throw Error('Vega / Vega-Lite not registered. Use the "register" method.');
  }

  const spec = _vegalite.compile(opt.spec || createSpec(self), opt.config),
        view = new _vega.View(_vega.parse(spec.spec), opt.view);

  if (opt.init) opt.init(view);

  return view;
}

export async function render(opt) {
  opt = options({container: opt && opt.container || element()}, opt);

  const view = await createView(this, opt).runAsync(),
        div = view.container() || {};

  div.value = view;
  return div;
}

export function toView(opt) {
  return createView(this, options(opt));
}

export function toSpec() {
  return createSpec(this);
}

export function toString(space) {
  return JSON.stringify(createSpec(this), null, space);
}

export function register(vega, vegalite, options) {
  _vegalite = vegalite;
  _vega = vega;
  _opt = options || {};
  return this;
}

var _vegalite, _vega, _opt;

// TODO: validation

function params(options) {
  const opt = Object.assign({}, options);
  opt.vegalite = Object.assign({}, _opt.vegalite, opt.vegalite);
  opt.vega = Object.assign({}, _opt.vega, opt.vega);
  return opt;
}

function createView(self, opt) {
  if (!_vegalite || !_vega) {
    throw Error('Vega / Vega-Lite not registered. Use the "register" method.');
  }

  const spec = _vegalite.compile(self.toJSON(), opt.vegalite),
        view = new _vega.View(_vega.parse(spec.spec), opt.vega);

  if (opt.init) opt.init(view);

  return view;
}

export async function render(options) {
  const opt = params(options);
  if (!opt.vega.container) {
    opt.vega.container = document.createElement('div');
  }

  const view = await createView(this, opt).runAsync(),
        div = view.container() || {};

  div.value = view;
  return div;
}

export function toView(options) {
  return createView(this, params(options));
}

export function register(vega, vegalite, options) {
  _vegalite = vegalite;
  _vega = vega;
  _opt = options || {};
  return this;
}

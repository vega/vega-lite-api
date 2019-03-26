var _vegalite,
    _vega,
    _opt,
    _config;

// TODO: validation

function params(options) {
  return Object.assign({}, _opt, options);
}

export async function render(options, config) {
  const opt = params(options);

  if (!opt.container) {
    opt.container = document.createElement('div');
  }

  const view = await toView.call(this, opt, config).runAsync(),
        div = view.container() || {};

  div.value = view;
  return div;
}

export function toView(options, config) {
  if (!_vegalite || !_vega) {
    throw Error('Vega / Vega-Lite not registered. Use the "register" method.');
  }
  const spec = _vegalite.compile(this.toJSON()),
        runtime = _vega.parse(spec.spec, config || _config);

  return new _vega.View(runtime, params(options));
}

export function register(vega, vegalite, options, config) {
  _vega = vega;
  _vegalite = vegalite;
  _opt = options;
  _config = config;
  return this;
}

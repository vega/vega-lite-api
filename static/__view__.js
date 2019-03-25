var _vegalite,
    _vega,
    _opt;

// TODO: validation

function params(options) {
  return Object.assign({}, _opt, options);
}

export async function render(options) {
  const opt = params(options);

  if (!opt.container) {
    opt.container = document.createElement('div');
  }

  const view = await toView.call(this, opt).runAsync(),
        div = view.container() || {};

  div.value = view;
  return div;
}

export function toView(options) {
  if (!_vegalite || !_vega) {
    throw Error('Vega / Vega-Lite not registered. Use the "register" method.');
  }
  const spec = _vegalite.compile(this.toJSON());
  return new _vega.View(_vega.parse(spec.spec), params(options));
}

export function register(vega, vegalite, options) {
  _vega = vega;
  _vegalite = vegalite;
  _opt = options;
  return this;
}

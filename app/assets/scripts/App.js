import $ from 'jquery';
import SVGInjector from './modules/SVGInjector';
import Inject from './modules/Inject';
import Movies from './modules/Movies';

if (Modernizr.svg) {
  new SVGInjector();
}

if ($('[data-inject]').length) {
  $('[data-inject]').each(function (i, el) {
    new Inject(el);
  })
}

if ($('[data-movies]').length) {
  $('[data-movies]').each(function (i, el) {
    new Movies(el);
  })
}

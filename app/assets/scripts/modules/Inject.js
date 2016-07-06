import $ from 'jquery';

class Inject {
  constructor (el) {
    this.$button = $(el);
    this.events();
  }

  events () {
    this.$button.on('click', this.fetchAsset.bind(this));
  }

  fetchAsset (ev) {
    let url = $(ev.currentTarget).data('inject');
    this.appendAsset(url);
  }

  appendAsset (url) {
    let image = $('<img>').attr('src', url).on('load', function () {
      $('body').append(image)
    });
  }
}

export default Inject;

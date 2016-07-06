import $ from 'jquery';
import Template from '../templates/movies.hbs';

class Movies {
  constructor (el) {
    this.$button = $(el);
    this.events();
  }

  events () {
    this.$button.on('click', this.fetchAsset.bind(this));
  }

  fetchAsset (ev) {
    let url = $(ev.currentTarget).data('movies');
    this.retrieveData(url);
  }

  retrieveData (url) {
    $.get(url).done(this.appendData);
  }

  appendData (data) {
    $('body').append(Template(data));
  }
}

export default Movies;

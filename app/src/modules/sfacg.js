const baseUrl = 'http://comic.sfacg.com/';
const urls = [
  /(\w+)?\.sfacg\.com/,
];

const parsePage = ($) => ({
  title: $('h1.font_red .F14PX').text(),
  list: $('ul.serialise_list.Blue_link2 li a').map((i, el) => {
    const link = $(el);

    return {
      id: i,
      url: `${baseUrl}${link.attr('href')}`,
      name: link.text(),
      selected: false,
    };
  }).get(),
});

export default {
  urls,
  parsePage,
};

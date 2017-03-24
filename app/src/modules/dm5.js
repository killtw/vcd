const urls = [
  /(\w+)?\.dm[5,9]\.com/,
];

const parsePage = ($) => ({
  title: $('h1.new_h2').text(),
  list: $('ul.nr6.lan2 a.tg').map((i, el) => {
    const link = $(el);

    return {
      id: i,
      url: `http://www.dm5.com/${link.attr('href')}`,
      name: link.attr('title'),
      selected: false,
    };
  }).get(),
});

export default {
  urls,
  parsePage,
};

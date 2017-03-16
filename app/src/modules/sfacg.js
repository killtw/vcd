const urls = [
  /(\w+)?\.sfacg\.com/,
];

const getTitle = ($) => $('h1.font_red .F14PX').text();

const getList = ($) => $('ul.serialise_list.Blue_link2 li a').map((i, el) => {
  const link = $(el);

  return {
    id: i,
    url: `http://comic.sfacg.com/${link.attr('href')}`,
    name: link.text(),
    selected: false,
  };
}).get();

export default {
  urls,
  getTitle,
  getList,
};

const urls = [
  /(\w+)?\.dm[5,9]\.com/,
];

const getTitle = ($) => $('h1.new_h2').text();

const getList = ($) => $('ul.nr6.lan2 a.tg').map((i, el) => {
  const link = $(el);

  return {
    id: i,
    url: `http://www.dm5.com/${link.attr('href')}`,
    name: link.attr('title'),
  };
}).get();

export default {
  urls,
  getTitle,
  getList,
};

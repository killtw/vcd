import request from 'request-promise';
import cheerio from 'cheerio';

const baseUrl = 'http://comic.sfacg.com/';
const imgBaseUrl = ['http://hotpic.sfacg.com', 'http://ltpic.sfacg.com'];
const urls = [/(\w+)?\.sfacg\.com/];

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

const getVolumnImages = async (url) => {
  const imgs = [];

  await request({
    url,
    transform: (body) => cheerio.load(body),
    gzip: true,
  }).then(async $ => {
    await request(`${baseUrl}${$('script')[1].attribs.src}`)
      .then(body => {
        const regex = /picAy\[\d+] = "([a-zA-Z0-9\-_/.]+)";/g;
        let match;
        do {
          match = regex.exec(body);
          if (match) {
            imgs.push({
              filename: match[1].substring(match[1].lastIndexOf('/') + 1),
              url: `${imgBaseUrl[Math.floor(Math.random() * imgBaseUrl.length)]}${match[1]}`,
            });
          }
        } while (match);
      });
  });

  return imgs;
};

export default {
  urls,
  parsePage,
  getVolumnImages,
};

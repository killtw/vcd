import request from '../renderer/request';
import cheerio from 'cheerio';
import fs from 'fs';

const baseUrl = 'http://comic.sfacg.com';
const imgBaseUrl = ['http://hotpic.sfacg.com', 'http://ltpic.sfacg.com'];
const urls = [/(\w+)?\.sfacg\.com/];

const parsePage = ($) => {
  const title = $('h1.font_red .F14PX').text();

  return {
    title,
    list: $('ul.serialise_list.Blue_link2 li a').map((i, el) => {
      const link = $(el);

      return {
        id: i,
        url: `${baseUrl}/${link.attr('href')}`,
        name: link.text(),
        selected: false,
        exists: fs.existsSync(`/Users/killtw/Downloads/${title}/${link.text()}.zip`),
      };
    }).get(),
  };
};

const getVolumnImages = async (url) => {
  const imgs = [];

  await request({
    url,
    transform: (body) => cheerio.load(body),
  }).then(async $ => {
    await request(`${baseUrl}/${$('script')[1].attribs.src}`)
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

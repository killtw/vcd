import moment from 'moment';

export function install(Vue) {
  Vue.filter('percent', (value, n = 4) => `${Number(value).toFixed(n) * 100} %`);
  Vue.filter('decimal', (value, n = 2) => Number(value).toFixed(n));
  Vue.filter('uppercase', value => value.toUpperCase());
  Vue.filter('ucfirst', value => `${value.charAt(0).toUpperCase()}${value.slice(1)}`);
  Vue.filter('datetime', (value, format = 'Y-MM-DD HH:mm:ss') => moment(value).format(format));
}

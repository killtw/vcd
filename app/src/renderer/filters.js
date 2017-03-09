export function install(Vue) {
  Vue.filter('percent', (value, n) => `${Number(value).toFixed(n || 4) * 100} %`);
  Vue.filter('decimal', (value, n) => Number(value).toFixed(n || 2));
  Vue.filter('uppercase', (value) => value.toUpperCase());
  Vue.filter('ucfirst', (value) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`);
}

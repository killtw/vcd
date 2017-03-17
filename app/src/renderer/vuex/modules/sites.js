import modules from '../../../modules/index';
import * as _ from 'lodash';
import request from 'request-promise';
import cheerio from 'cheerio';

const state = {
  title: null,
  list: [],
  module: null,
};

const types = {
  PARSE_URL: 'PARSE_URL',
  PARSE_PAGE: 'PARSE_PAGE',
  SORT_LIST: 'SORT_LIST',
  CLEAR_DATA: 'CLEAR_DATA',
  TOGGLE_VOLUMN: 'TOGGLE_VOLUMN',
  TOGGLE_ALL: 'TOGGLE_ALL',
};

const getters = {
  getTitle: state => state.title,
  getList: state => state.list,
  getModule: state => state.module,
};

/* eslint-disable no-console */
const mutations = {
  [types.PARSE_URL](state, url) {
    console.log('parse url:', url);

    state.module = _.find(modules, (module) => !!(module.urls.filter(
      regex => url.match(regex)
    ).length));

    console.log('module:', state.module);
  },
  [types.PARSE_PAGE](state, $) {
    state.title = state.module.getTitle($);
    console.log('title:', state.title);

    state.list = state.module.getList($);
    console.log('count:', state.list.length);
  },
  [types.SORT_LIST](state) {
    state.list = state.list.reverse();
  },
  [types.CLEAR_DATA](state) {
    state.title = null;
    state.list = [];
    state.module = null;
  },
  [types.TOGGLE_VOLUMN](state, id) {
    const volumn = _.find(state.list, (vol) => vol.id === id);
    volumn.selected = !(volumn.selected);
  },
  [types.TOGGLE_ALL](state, checked) {
    for (const volumn of state.list) {
      volumn.selected = checked;
    }
  },
};

const actions = {
  async parseUrl({ commit }, url) {
    commit(types.PARSE_URL, url);
  },
  async add({ dispatch, commit }, url) {
    await dispatch('parseUrl', url);

    request({
      uri: url,
      transform: (body) => cheerio.load(body),
    })
      .then($ => commit(types.PARSE_PAGE, $))
      .catch(error => console.log('error:', error));
  },
  sort({ commit }) {
    commit(types.SORT_LIST);
  },
  clear({ commit }) {
    commit(types.CLEAR_DATA);
  },
  toggle({ commit }, id) {
    commit(types.TOGGLE_VOLUMN, id);
  },
  toggleAll({ commit }, checked) {
    commit(types.TOGGLE_ALL, checked);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

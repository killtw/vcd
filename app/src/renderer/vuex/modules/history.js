import * as storage from 'electron-storage';

const state = [];

const types = {
  INIT_HISTORY: 'INIT_HISTORY',
  ADD_HISTORY: 'ADD_HISTORY',
};

const getters = {
  getHistories: state => state,
};

const mutations = {
  [types.INIT_HISTORY](state, histories) {
    for (const history of histories) {
      state.push(history);
    }
  },
  [types.ADD_HISTORY](state, history) {
    state.push(history);
  },
};

/* eslint-disable no-console */
const actions = {
  init({ commit }) {
    storage.isPathExists('history.json')
      .then(exist => {
        if (exist) {
          storage.get('history.json')
            .then(data => commit(types.INIT_HISTORY, data));
        } else {
          storage.set('history.json', []);
        }
      });
  },
  add({ commit, state }, history) {
    commit(types.ADD_HISTORY, history);
    storage.set('history.json', state)
      .then(console.log('history set'));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

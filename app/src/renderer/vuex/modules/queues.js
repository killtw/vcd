const state = [];

const status = {
  PENDING: 0,
  DOWNLOADING: 1,
  DONE: 2,
};

const types = {
  ADD_JOB: 'ADD_JOB',
  ADD_JOBS: 'ADD_JOBS',
};

const getters = {
  getQueues: state => state,
};

const mutations = {
  [types.ADD_JOB](state, job) {
    state.push({
      title: job.title,
      url: job.url,
      list: job.volumns.map(vol => vol.url),
      module: job.module,
      total: job.total,
      count: job.volumns.length,
      status: status.PENDING,
    });
  },
};

/* eslint-disable no-console */
const actions = {
  async add({ commit }, job) {
    console.log('add job:', job);
    commit(types.ADD_JOB, job);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

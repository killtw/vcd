import request from 'request-promise';
import fs from 'fs';
import fse from 'fs-extra';

const state = [];

const status = {
  PENDING: 0,
  DOWNLOADING: 1,
  DONE: 2,
};

const types = {
  ADD_JOB: 'ADD_JOB',
  ADD_JOBS: 'ADD_JOBS',
  SET_STATUE: 'SET_STATUE',
  SET_VOLUMN_DONE: 'SET_VOLUMN_DONE',
};

const getters = {
  getQueues: state => state,
  pendings: state => state.filter(queue => queue.status === status.PENDING),
};

const mutations = {
  [types.ADD_JOB](state, job) {
    state.push({
      title: job.title,
      url: job.url,
      list: job.volumns.map(vol => ({
        url: vol.url,
        name: vol.name,
        done: false,
      })),
      module: job.module,
      total: job.total,
      count: job.volumns.length,
      status: status.PENDING,
    });
  },
  [types.SET_STATUE](state, series) {
    state.find(queue => queue === series.queue).status = series.status;
  },
  [types.SET_VOLUMN_DONE](state, series) {
    state.find(queue => queue === series.queue).list.find(vol => vol === series.volumn).done = true;
  },
};

/* eslint-disable no-console */
const actions = {
  add({ commit }, job) {
    console.log('add job:', job);
    commit(types.ADD_JOB, job);
  },
  async start({ commit, dispatch, getters }) {
    for (const queue of getters.pendings) {
      commit(types.SET_STATUE, { queue, status: status.DOWNLOADING });

      for (const volumn of queue.list.filter(volumn => volumn.done === false)) {
        await dispatch('download', { volumn, module: queue.module, title: queue.title });
        commit(types.SET_VOLUMN_DONE, { queue, volumn });
      }

      commit(types.SET_STATUE, { queue, status: status.DONE });
    }
  },
  async download({ commit }, job) {
    for (const img of await job.module.getVolumnImages(job.volumn.url)) {
      const path = `/Users/killtw/Downloads/${job.title}/${job.volumn.name}`;
      await fse.ensureDirSync(path);
      request(img.url).pipe(fs.createWriteStream(`${path}/${img.filename}`));
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

import request from '../../request';
import fs from 'fs';
import fse from 'fs-extra';
import archiver from 'archiver';

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
  [types.SET_VOLUMN_DONE](state, volumn) {
    state.find(queue => queue.list.includes(volumn)).list.find(vol => vol === volumn).done = true;
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

      await Promise.all(queue.list.filter(volumn => volumn.done === false).map(async volumn => {
        await dispatch('download', { volumn, module: queue.module, title: queue.title });

        await dispatch('compress', {
          name: volumn.name,
          path: `/Users/killtw/Downloads/${queue.title}`,
        });
      }));

      commit(types.SET_STATUE, { queue, status: status.DONE });
    }
  },
  async download({ commit }, job) {
    const path = `/Users/killtw/Downloads/${job.title}/${job.volumn.name}`;
    await fse.ensureDirSync(path);
    const imgs = await job.module.getVolumnImages(job.volumn.url);

    await Promise.all(
      imgs.map(img => new Promise(resolve => {
        const stream = fs.createWriteStream(`${path}/${img.filename}`);
        stream.on('finish', resolve);
        request(img.url).pipe(stream);
      }))
    );

    commit(types.SET_VOLUMN_DONE, job.volumn);
  },
  async compress({ commit }, payload) {
    return new Promise(resolve => {
      const output = fs.createWriteStream(`${payload.path}/${payload.name}.zip`);
      const archive = archiver('zip');
      const path = `${payload.path}/${payload.name}/`;

      output.on('close', () => {
        console.log(`${archive.pointer()} total bytes`);
        fse.removeSync(path);
        resolve();
      });

      archive.pipe(output);
      archive.directory(path, payload.name)
        .finalize();
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

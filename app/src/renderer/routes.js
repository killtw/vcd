import Main from './components/Main';
import Library from './components/Library';
import History from './components/History';
import Setting from './components/Setting';
import About from './components/About';

export default [
  {
    path: '/queue',
    component: Main,
    name: 'queue',
    alias: '/',
  },
  {
    path: '/library',
    component: Library,
    name: 'library',
  },
  {
    path: '/history',
    component: History,
    name: 'history',
  },
  {
    path: '/setting',
    component: Setting,
    name: 'setting',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
  },
  {
    path: '*',
    redirect: '/',
  },
];

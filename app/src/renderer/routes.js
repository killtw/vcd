import Default from './components/Layout/Default';

export default [
  {
    path: '/',
    component: Default,
    children: Default.routes,
  },
  {
    path: '*',
    redirect: '/',
  },
];

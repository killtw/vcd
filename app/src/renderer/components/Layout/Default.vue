<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

    <addbar></addbar>

    <sidebar></sidebar>

    <main class="mdl-layout__content mdl-color--grey-100">
      <div class="page-content mdl-grid">
        <router-view></router-view>
      </div>
    </main>

  </div>
</template>

<script>
  import componentHandler from 'material-design-lite';
  import Sidebar from './Sidebar';
  import Addbar from './Addbar';
  import Main from '../Main';
  import Library from '../Library';
  import History from '../History';
  import About from '../About';

  export default {
    ready: () => {
      componentHandler.upgradeDom();
    },
    components: {
      Sidebar,
      Addbar,
    },
    routes: [
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
        path: '/about',
        component: About,
        name: 'about',
      },
    ],
  };
</script>

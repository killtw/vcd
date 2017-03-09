<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <top></top>
    <sidebar></sidebar>
    <main class="mdl-layout__content">
      <div class="page-content">
        ttest
      </div>
    </main>
  </div>
</template>

<script>
  import componentHandler from 'material-design-lite';
  import Sidebar from './Sidebar';
  import Top from './Header';
  import Main from '../Main';

  export default {
    ready: () => {
      componentHandler.upgradeDom();
    },
    components: {
      Sidebar,
      Top,
    },
    routes: [
      {
        path: '/',
        component: Main,
      },
    ],
  };
</script>

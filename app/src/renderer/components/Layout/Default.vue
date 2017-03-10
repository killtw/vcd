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

  export default {
    ready: () => {
      componentHandler.upgradeDom();
    },
    components: {
      Sidebar,
      Addbar,
    },
  };
</script>

<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

    <addbar></addbar>

    <sidebar></sidebar>

    <main class="mdl-layout__content mdl-color--grey-100">
      <div class="page-content mdl-grid">
        <router-view></router-view>
      </div>
    </main>

    <modal></modal>

  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Sidebar from './Sidebar';
  import Addbar from './Addbar';
  import Modal from './Modal';

  export default {
    created() {
      this.initHistory();
    },
    methods: {
      ...mapActions('history', {
        initHistory: 'init',
      }),
    },
    components: {
      Sidebar,
      Addbar,
      Modal,
    },
  };
</script>

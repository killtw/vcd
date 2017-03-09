<template>
  <div class="mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 drawer">
    <span class="mdl-layout-title">VCD</span>
    <nav class="mdl-navigation mdl-color--blue-grey-800 navigation">
      <router-link :to="{ name: route.name }" class="mdl-navigation__link" v-for="route in routes">
        <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">{{ route.icon }}</i>
        {{ route.name | ucfirst }}
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
          {
            name: 'queue',
            icon: 'view_list',
          },
          {
            name: 'library',
            icon: 'library_books',
          },
          {
            name: 'history',
            icon: 'history',
          },
          {
            name: 'setting',
            icon: 'settings',
          },
          {
            name: 'about',
            icon: 'info',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .drawer {
    border: none;
  }
  .navigation {
    flex-grow: 1;
  }
  .mdl-navigation__link {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    color: rgba(255, 255, 255, 0.56) !important;
    font-weight: 500;
  }
  .mdl-navigation__link:hover {
    color: #37474F !important;
  }
  .router-link-active {
    background-color: rgb(224,224,224);
    color: #37474F !important;
  }
  .mdl-navigation__link .material-icons {
    font-size: 24px !important;
    color: rgba(255, 255, 255, 0.56);
    margin-right: 32px;
  }
</style>

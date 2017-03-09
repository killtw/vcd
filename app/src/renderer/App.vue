<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store';
  import 'material-design-lite';

  export default {
    store,
  };
</script>

<style lang='scss'>
  $md-icon-path: '~material-design-icons/iconfont/';
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url("#{$md-icon-path}MaterialIcons-Regular.woff2") format('woff2');
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  @import '~material-design-lite/src/material-design-lite.scss';
</style>

<template>
    <header class="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div class="mdl-layout__header-row">
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--align-right">
                <label class="mdl-button mdl-js-button mdl-button--icon" for="add_button">
                    <i class="material-icons">add_circle_outline</i>
                </label>
                <div class="mdl-textfield__expandable-holder widefield">
                    <input class="mdl-textfield__input" type="text" id="add_button" @keyup.enter="addUrl">
                </div>
            </div>

            <mdl-button icon="file_download" class="mdl-js-ripple-effect" @click.native="start"></mdl-button>
        </div>
    </header>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      addUrl(e) {
        const url = e.target.value;
        e.target.value = null;
        this.$el.querySelector('.mdl-textfield').MaterialTextfield.change();
        if (url.trim()) {
          this.add(url);
        }
      },
      ...mapActions('sites', ['add']),
      ...mapActions('queues', ['start']),
    },
  };
</script>

<style scoped>
    .widefield {
        width: 1000px;
    }
</style>
<style>
    .mdl-layout__header .mdl-layout__drawer-button {
      color: #37474F !important;
    }
</style>

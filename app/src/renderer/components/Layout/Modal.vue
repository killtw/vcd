<template>
  <mdl-dialog ref="volumnList" :title="title" @close="clear">
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
      <thead>
      <tr>
        <th><mdl-checkbox v-model="all"></mdl-checkbox></th>
        <th class="mdl-data-table__cell--non-numeric" @click="sort">Title</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="volumn in volumns">
        <td>
          <mdl-checkbox @change.native="toggle(volumn.id)" :value="volumn.selected"></mdl-checkbox>
        </td>
        <td class="mdl-data-table__cell--non-numeric">{{ volumn.name }}</td>
      </tr>
      </tbody>
    </table>
    <template slot="actions">
      <mdl-button primary @click.native="submit">Submit</mdl-button>
      <mdl-button @click.native="$refs.volumnList.close">Close</mdl-button>
    </template>
  </mdl-dialog>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      checked() {
        return this.volumns.filter(volumn => volumn.selected);
      },
      all: {
        get() { return this.volumns.length === this.checked.length; },
        set(value) { this.toggleAll(value); },
      },
      ...mapGetters('sites', {
        url: 'getUrl',
        title: 'getTitle',
        volumns: 'getList',
        module: 'getModule',
      }),
    },
    watch: {
      title(value) {
        if (value) {
          this.$refs.volumnList.open();
        }
      },
    },
    methods: {
      async submit() {
        await this.add({
          title: this.title,
          url: this.url,
          volumns: this.checked,
          module: this.module,
          total: this.volumns.length,
        });

        this.$refs.volumnList.close();
      },
      ...mapActions('queues', [
        'add',
      ]),
      ...mapActions('sites', [
        'sort',
        'clear',
        'toggle',
        'toggleAll',
      ]),
    },
  };
</script>

<style>
  .mdl-dialog-container .mdl-dialog {
    height: 80%;
  }
  .mdl-dialog__content {
    overflow-y: scroll;
    max-height: 75%;
    min-height: 75%;
    padding: 0 24px 24px 24px !important;
    margin-top: 20px;
  }
</style>

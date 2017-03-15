<template>
  <mdl-dialog ref="infoMessage" title="Hi there">
    <p>Hello. This is an information message. You can click outside or in the close button to close it.</p>

    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
      <thead>
      <tr>
        <th></th>
        <th class="mdl-data-table__cell--non-numeric"></th>
        <th>Total</th>
        <th>Checked</th>
        <th class="mdl-data-table__cell--non-numeric">Status</th>
        <th class="mdl-data-table__cell--non-numeric">Url</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
        <td class="mdl-data-table__cell--non-numeric">123</td>
        <td>123</td>
        <td>123</td>
        <td class="mdl-data-table__cell--non-numeric">123</td>
        <td class="mdl-data-table__cell--non-numeric">123</td>
      </tr>
      </tbody>
    </table>
  </mdl-dialog>
</template>

<script>
  import { mapGetters } from 'vuex';

export default {
    computed: mapGetters('url', ['getList']),
    watch: {
      getList(value) {
        if (value.length) {
          this.$refs.infoMessage.open();
        }
      },
    },
  };
</script>

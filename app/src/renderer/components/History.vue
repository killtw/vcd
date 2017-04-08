<template>
  <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
    <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric">Name</th>
      <th class="mdl-data-table__cell--non-numeric">Url</th>
      <th class="mdl-data-table__cell--non-numeric">Created</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="history in histories">
      <td class="mdl-data-table__cell--non-numeric">{{ history.title }}</td>
      <td class="mdl-data-table__cell--non-numeric">{{ history.url }}</td>
      <td class="mdl-data-table__cell--non-numeric">{{ history.created_at | datetime }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters('history', {
      histories: 'getHistories',
    }),
  };
</script>

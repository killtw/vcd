<template>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
      <thead>
        <tr>
          <th>#</th>
          <th class="mdl-data-table__cell--non-numeric">Name</th>
          <th>Total</th>
          <th>Checked</th>
          <th class="mdl-data-table__cell--non-numeric">Status</th>
          <th class="mdl-data-table__cell--non-numeric">Url</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(queue, index) in queues">
          <td>{{ index }}</td>
          <td class="mdl-data-table__cell--non-numeric">{{ queue.name }}</td>
          <td>{{ queue.total }}</td>
          <td>{{ queue.checked }}</td>
          <td class="mdl-data-table__cell--non-numeric">{{ queue.status }}</td>
          <td class="mdl-data-table__cell--non-numeric">{{ queue.url }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
  export default {
    data() {
      return {
        queues: [],
      };
    },
  };
</script>


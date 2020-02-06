<template>
  <div class="card my-4">
    <div class="card-header bg-dark text-white">
      <h4 class="title">Goals Scored</h4>
    </div>
    <div class="card-body">
      <ul class="list-group my-4">
        <li class="list-group-item" v-for="goal in goals">
          {{goal.minute}}'  {{goal.scorername}}
          <span class="font-weight-bold" style="float: right">{{goal.scorehome}} - {{goal.scoreaway}}</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

  export default {
    computed: {
      goals() {
        return this.$store.getters.getMatchGoals;
      }
    }
  }
</script>

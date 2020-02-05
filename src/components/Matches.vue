<template>
  <div class="container">
    <h3 class="title display-4 text-center">These are all {{matchesInfos.length}} matches so far</h3>
    <Match v-for="(matchInfo, index) in matchesInfos" :key="index" :match-data="matchInfo"></Match>
  </div>
</template>

<script>
  import Match from './Match.vue'
  export default {
    components: {Match},
    computed: {
      matchesInfos() {
        return this.$store.getters.getAllMatches;
      }
    }
  }
</script>

<template>
  <div class="container">
    <Match v-for="(matchInfo, index) in matchesInfos" :key="index" :data="matchInfo"></Match>
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
    },
    mounted() {
      console.log(this.matchesInfo);
    }
  }
</script>

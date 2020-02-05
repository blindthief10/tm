<template>
    <div class="container">
        <p class="lead display-4">{{selectedMatchInfo.description}}</p>
    </div>


</template>

<script>

  export default {
    computed: {
      selectedMatchInfo() {
        return this.$store.getters.selectedMatch;
      }
    },
    created() {
      this.$store.dispatch('fetchGivenMatch', this.$route.params.id);
    }
  }


</script>

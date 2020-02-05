<template>
    <div class="container mb-4">
        <p class="lead display-4">{{selectedMatchInfo.description}}</p>
        <p class="lead" v-if="selectedMatchInfo.status == 'Fixture'">{{this.dateGameStarts}}</p>
    </div>

</template>

<script>


  import moment from 'moment';

  export default {
    computed: {
      selectedMatchInfo() {
        return this.$store.getters.selectedMatch;
      },
      dateGameStarts() {
        return `Game starts at: ${moment(this.selectedMatchInfo.date).format('dddd, MMMM Do YYYY, h:mm:ss a')}`
      }
    },
    created() {
      this.$store.dispatch('fetchGivenMatch', this.$route.params.id);
    }
  }


</script>

<template>
  <div class="card my-5">
    <div class="header bg-info">
      <p class="lead mt-2 text-white">{{competitionInfo}}</p>
    </div>
    <div class="card-body">
      <p class="card-text display-4">{{matchData.description}}</p>
    </div>
    <div class="card-footer bg-dark text-white d-flex justify-content-around align-items-center">
      <p class="lead">{{beginsAt}}</p>
      <button class="btn btn-info" @click="learnMore">Learn more</button>
    </div>
  </div>

</template>

<script>

  import moment from 'moment';

  export default {
    props: ['matchData'],
    methods: {
      learnMore() {
        this.$router.push(`givenMatch/${this.matchData.tmv4}`);
      }
    },
    computed: {
      beginsAt() {
        return `Game starts at: ${moment(this.matchData.tags.KickOff[0]).format('dddd, MMMM Do YYYY, h:mm:ss a')}`
      },
      competitionInfo() {
        return `Competition: ${this.matchData.tags.Competition[0]}`;
      }
    }

  }
</script>

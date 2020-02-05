<template>
  <div class="card my-5">
    <div class="header">
      <p class="lead">{{competitionInfo}}</p>
    </div>
    <div class="card-body">
      <p class="card-text display-4">{{data.description}}</p>
      <button class="btn btn-info">Learn more</button>
    </div>
    <div class="card-footer bg-dark text-white">
      <p class="lead">{{beginsAt}}</p>
    </div>
  </div>

</template>

<script>

  import moment from 'moment';

  export default {
    props: ['data'],
    computed: {
      beginsAt() {
        return `Game starts at: ${moment(this.data.tags.KickOff[0]).format('dddd, MMMM Do YYYY, h:mm:ss a')}`
      },
      competitionInfo() {
        return `Competition: ${this.data.tags.Competition[0]}`;
      }
    }

  }
</script>

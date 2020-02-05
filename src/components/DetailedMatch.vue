<template>
    <div class="container mb-4">
        <p class="lead display-4">{{selectedMatchInfo.description}}</p>
        <p class="lead" v-html="competitonDescription"></p>
        <p class="lead" v-if="selectedMatchInfo.status === 'Fixture'" v-html="dateGameStarts"></p>
        <div v-if="selectedMatchInfo.status === 'Played'" class="d-flex flex-column justify-content-between">
          <h3 class="lead display-3 text-center my-5" v-text="finalScore"></h3>
          <div class="d-flex flex-row justify-content-around">

            <div class="card d-flex flex-column justify-content-between">
              <div class="card-header bg-light">
                <h4 class="title text-center" v-text="homeTeam"></h4>
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="homePlayer in selectedMatchInfo.lineups.home.start">
                    {{homePlayer.shirt}}. {{homePlayer.name}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="card d-flex flex-column justify-content-between">
              <div class="card-header bg-dark text-white">
                <h4 class="title text-center" v-text="awayTeam"></h4>
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="awayPlayer in selectedMatchInfo.lineups.away.start">
                    {{awayPlayer.shirt}}. {{awayPlayer.name}}
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <p class="lead" v-text="attendance"></p>
        </div>
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
        return `Game starts at: <strong>${moment(this.selectedMatchInfo.date)
                            .format('dddd, MMMM Do YYYY, h:mm:ss a')}</strong>`
      },
      competitonDescription() {
        return `Competition: <strong>${this.selectedMatchInfo.competition}</strong>`
      },
      finalScore() {
        return `Final score: ${this.selectedMatchInfo.scores.total.home} - ${this.selectedMatchInfo.scores.total.away}`;
      },
      attendance() {
        return `Attendance: ${this.selectedMatchInfo.attendance}`;
      },
      homeTeam() {
        return `${this.selectedMatchInfo.hometeam}\'s starting lineup`;
      },
      awayTeam() {
        return `${this.selectedMatchInfo.awayteam}\'s starting lineup`;
      }
    },
    created() {
      this.$store.dispatch('fetchGivenMatch', this.$route.params.id);
    }
  }


</script>

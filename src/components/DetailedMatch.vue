<template>
    <div class="container mb-4">
        <p class="lead display-4">{{selectedMatchInfo.description}}</p>
        <p class="lead" v-html="competitonDescription"></p>
        <p class="lead" v-if="selectedMatchInfo.status === 'Fixture'" v-html="dateGameStarts"></p>
        <div v-if="selectedMatchInfo.status === 'Played'" class="d-flex flex-column justify-content-between">
          <h3 class="lead display-3 text-center my-5" v-text="finalScore"></h3>
          <div class="d-flex flex-row justify-content-around">

            <div class="card d-flex flex-column justify-content-around w-25">

              <div class="card-header bg-light text-dark">
                <h4 class="title text-center">{{homeTeam}} starting lineup</h4>
              </div>

              <div class="card-body">
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="homeStarter in selectedMatchInfo.lineups.home.start">
                    {{homeStarter.shirt}}. {{homeStarter.name}}
                  </li>
                </ul>
              </div>


              <div class="card-header bg-light text-dark">
                <h4 class="title text-center">{{homeTeam}} substitutions</h4>
              </div>

              <div class="card-body">
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="homeSub in selectedMatchInfo.lineups.home.subs">
                    {{homeSub.shirt}}. {{homeSub.name}}
                  </li>
                </ul>
              </div>

            </div>




            <div class="card d-flex flex-column justify-content-around w-25">

              <div class="card-header bg-dark text-white">
                <h4 class="title text-center">{{awayTeam}} starting lineup</h4>
              </div>

              <div class="card-body">
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="awayStarter in selectedMatchInfo.lineups.away.start">
                    {{awayStarter.shirt}}. {{awayStarter.name}}
                  </li>
                </ul>
              </div>


              <div class="card-header bg-dark text-white">
                <h4 class="title text-center">{{awayTeam}} substitutions</h4>
              </div>

              <div class="card-body">
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="awaySub in selectedMatchInfo.lineups.away.subs">
                    {{awaySub.shirt}}. {{awaySub.name}}
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
        return this.selectedMatchInfo.hometeam;
      },
      awayTeam() {
        return this.selectedMatchInfo.awayteam;
      }
    },
    created() {
      this.$store.dispatch('fetchGivenMatch', this.$route.params.id);
    }
  }


</script>

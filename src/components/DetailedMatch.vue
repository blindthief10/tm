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
                  <li class="list-group-item text-dark" v-for="homeStarter in selectedMatchInfo.lineups.home.start"
                      :class="{'bg-danger': playersOut.includes(homeStarter.name)}">
                    {{homeStarter.shirt}}. {{homeStarter.name}}
                    <span v-if="playersOut.includes(homeStarter.name)" style="float: right">Out</span>
                  </li>
                </ul>
              </div>


              <div class="card-header bg-light text-dark">
                <h4 class="title text-center">{{homeTeam}} substitutions</h4>
              </div>

              <div class="card-body">
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="homeSub in selectedMatchInfo.lineups.home.subs"
                  :class="{'bg-success': playersIn.includes(homeSub.name)}">
                    {{homeSub.shirt}}. {{homeSub.name}}
                    <span v-if="playersIn.includes(homeSub.name)" style="float: right">In</span>
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
                  <li class="list-group-item text-dark" v-for="awayStarter in selectedMatchInfo.lineups.away.start"
                    :class="{'bg-danger': playersOut.includes(awayStarter.name)}">
                    {{awayStarter.shirt}}. {{awayStarter.name}}
                    <span v-if="playersOut.includes(awayStarter.name)" style="float: right">Out</span>
                  </li>
                </ul>
              </div>


              <div class="card-header bg-dark text-white">
                <h4 class="title text-center">{{awayTeam}} substitutions</h4>
              </div>

              <div class="card-body">
                <ul class="list-group my-4">
                  <li class="list-group-item text-dark" v-for="awaySub in selectedMatchInfo.lineups.away.subs"
                  :class="{'bg-success': playersIn.includes(awaySub.name)}">
                    {{awaySub.shirt}}. {{awaySub.name}}
                    <span v-if="playersIn.includes(awaySub.name)" style="float: right">In</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>


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

          <p class="lead" v-html="attendance"></p>

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
        return `Attendance: <strong>${this.selectedMatchInfo.attendance}</strong> people`;
      },
      homeTeam() {
        return this.selectedMatchInfo.hometeam;
      },
      awayTeam() {
        return this.selectedMatchInfo.awayteam;
      },
      goals() {
        return this.$store.getters.getMatchGoals;
      },
      playersOut() {
        return this.$store.getters.playersOut;
      },
      playersIn() {
        return this.$store.getters.playersIn;
      }
    },
    created() {
      this.$store.dispatch('fetchGivenMatch', this.$route.params.id);
    }
  }


</script>

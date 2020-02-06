<template>
    <div class="container mb-4">
        <p class="lead display-4">{{selectedMatchInfo.description}}</p>
        <p class="lead" v-html="competitonDescription"></p>

        <p class="lead" v-if="selectedMatchInfo.status === 'Fixture'" v-html="dateGameStarts"></p>

        <div v-if="selectedMatchInfo.status === 'Played'" class="d-flex flex-column justify-content-between">
          <h3 class="lead display-3 text-center my-5" v-text="finalScore"></h3>


          <div class="d-flex flex-row justify-content-around my-5">
            <PlayerList :team="homeTeam" :players="homeStarters"></PlayerList>
            <PlayerList :team="awayTeam" :players="awayStarters" :isAway="true"></PlayerList>
          </div>


          <div class="d-flex flex-row justify-content-around my-5">
            <PlayerList :team="homeTeam" :players="homeSubs" :isStarters="false"></PlayerList>
            <PlayerList :team="awayTeam" :players="awaySubs" :isStarters="false" :isAway="true"></PlayerList>
          </div>

          <GoalsList></GoalsList>
          <p class="lead" v-html="attendance"></p>

        </div>

      </div>
    </div>

</template>

<script>
  import moment from 'moment';
  import PlayerList from './PlayerList.vue';
  import GoalsList from './GoalsList.vue';

  export default {
    components: {PlayerList, GoalsList},
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
      homeStarters() {
        return this.selectedMatchInfo.lineups.home.start;
      },
      awayStarters() {
        return this.selectedMatchInfo.lineups.away.start;
      },
      homeSubs() {
        return this.selectedMatchInfo.lineups.home.subs;
      },
      awaySubs() {
        return this.selectedMatchInfo.lineups.away.subs;
      }
    },
    created() {
      this.$store.dispatch('fetchGivenMatch', this.$route.params.id);
    }
  }


</script>

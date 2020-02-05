import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allServices: [],
    allMatches: [],
    selectedMatch: {}
  },
  getters: {
    getAllServices: state => state.allServices,
    getAllMatches: state => state.allMatches,
    selectedMatch: state => state.selectedMatch,
    getMatchGoals: state => {
      const allGoalsTogether = state.selectedMatch.goals.home.concat(state.selectedMatch.goals.away);
      return allGoalsTogether.sort((a, b) => a.minute < b.minute);
    },
    playersOut: state => {
      const homeOut = state.selectedMatch.subs.home.map(sub => sub.offname);
      const awayOut = state.selectedMatch.subs.away.map(sub => sub.offname);
      return homeOut.concat(awayOut);
    },
    playersIn: state => {
      const homeIn =  state.selectedMatch.subs.home.map(sub => sub.onname);
      const awayIn = state.selectedMatch.subs.away.map(sub => sub.onname);
      return homeIn.concat(awayIn);
    }
  },
  mutations: {
    fillServices: (state, allServices) => {
      state.allServices = allServices;
    },
    fillMatches: (state, allMatches) => {
      state.allMatches = allMatches;
    },
    showGivenMatch: (state, selectedMatch) => {
      state.selectedMatch = selectedMatch;
    }
  },
  actions: {
    fetchServices({commit}) {
      axios.get('http://localhost:3000/services')
      .then(response => {
        commit('fillServices', response.data);
      })
    },
    fetchMatches({commit}) {
      axios.get('http://localhost:3000/matches')
      .then(response => {
        commit('fillMatches', response.data)
      })
    },
    fetchGivenMatch({commit}, id) {
      axios.get('http://localhost:3000/match', {params: {matchId: id}})
      .then(response => {
        commit('showGivenMatch', response.data[0]);
      })
    }
  }
})

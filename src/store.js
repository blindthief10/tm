import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allServices: [],
    allMatches: []
  },
  getters: {
    getAllServices: state => state.allServices,
    getAllMatches: state => state.allMatches
  },
  mutations: {
    fillServices: (state, allServices) => {
      state.allServices = allServices;
    },
    fillMatches: (state, allMatches) => {
      state.allMatches = allMatches;
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
    }
  }
})

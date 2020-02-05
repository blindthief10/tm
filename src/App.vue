<template>
  <div id="app">
    <Services></Services>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Services from './components/Services.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {Navbar, Services},
  data () {
    return {

    }
  },
  created() {
    this.$store.dispatch('fetchServices');
    this.$store.dispatch('fetchMatches');
  }
}
</script>

<style>

</style>

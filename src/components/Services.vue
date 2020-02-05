<template>
  <div class="container p-3">
    <div class="my-4">
      <h3 class="title">List of current services and their statuses:</h3>
      <Service v-for="(serviceInfo, index) in servicesInfo" :key="index" :info="serviceInfo"></Service>
    </div>

  </div>

</template>

<script>
import Service from './Service.vue'

  export default {
    components: {Service},
    computed: {
      servicesInfo() {
        return this.$store.getters.getAllServices;
      }
    }
  }
</script>

<style>
</style>

<template>
  <div class="alert" :class="classStatus">
    <p class="lead" v-html="statusText"></p>
  </div>

</template>

<script>

  import {colorMatch} from '../utils';

  export default {
    props: ['info'],
    computed: {
      statusText() {
        return `<strong>${this.info.name}</strong> service is <strong>${this.info.status}</strong>.`;
      },
      classStatus() {
        return 'alert-' + colorMatch.find(statusClass => statusClass.status == this.info.status).className;
      }
    }
  }

</script>

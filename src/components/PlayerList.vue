<template>
  <div class="card d-flex flex-column justify-content-around w-25">

    <div class="card-header bg-light text-dark" :class="{'bg-dark': isAway}">
      <h4 class="title text-center" :class="{'text-white': isAway}">
        {{team}} {{isStarters ? 'lineup' : 'subs'}}
      </h4>
    </div>

    <div class="card-body">
      <ul class="list-group my-4">
        <li class="list-group-item text-dark" v-for="player in players"
            :class="{'bg-danger': playersOut.includes(player.name),
                    'bg-success': playersIn.includes(player.name)}">
                    {{player.shirt}}. {{player.name}}
          <span v-if="playersOut.includes(player.name)" style="float: right">Out</span>
          <span v-else-if="playersIn.includes(player.name)" style="float: right">In</span>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>

  export default {
    props: {
      team: {type: String, required: true},
      players: {type: Array, required: true},
      isAway: {type: Boolean, default: false},
      isStarters: {type: Boolean, default: true}
    },
    computed: {
      playersOut() {
        return this.$store.getters.playersOut;
      },
      playersIn() {
        return this.$store.getters.playersIn;
      }
    }

  }
</script>

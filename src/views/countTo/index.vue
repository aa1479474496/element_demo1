<template>
  <countTo :startVal='startVal' :endVal='endVal' :duration='3000' ></countTo>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    data () {
      return {
        startVal: 2017,
        endVal: 0
      }
    }
  }
</script>
<template>
  <div id="app">
    <GoogleHome />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GoogleHome from '@/screens/GoogleHome'


@Component({
  components: {
    GoogleHome,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>

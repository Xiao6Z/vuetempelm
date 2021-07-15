<template>
  <div id="app">
    <router-view/>
    <mtabbar/>
  </div>
</template>

<script>
import mtabbar from './views/homeviews/mtabbar.vue'

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    mtabbar
  }
}
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
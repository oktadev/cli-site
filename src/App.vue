<template>
  <div id="app">
    <OktaCliDocs/>
  </div>
</template>

<script>
import OktaCliDocs from '@/components/OktaCliDocs.vue'

export default {
  name: 'App',
  components: {
    OktaCliDocs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <Registration />
  </div>
</template>

<script>
import Registration from './components/Registration.vue'

export default {
  name: 'app',
  components: {
    Registration
  }
}
</script>

<style>
body {
  background-color: #222;
  color: white;
  font-family: sans-serif;
  font-size: 20px;
}
</style>

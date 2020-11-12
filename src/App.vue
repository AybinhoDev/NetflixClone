<template>
  <div id="app">
    <Index @dialog="true"/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index,
  },
}
</script>

<style>
#app{
  box-sizing: border-box;
}
</style>


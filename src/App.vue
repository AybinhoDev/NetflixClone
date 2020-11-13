<template>
  <div id="app">
    <Header/>
    <Index @dialog="true"/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index, Header
  },
}
</script>

<style>
#app{
  box-sizing: border-box;
}
</style>


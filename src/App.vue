<template>
  <div id="app">

      <NavBar   @authenticated="setAuthenticated()">
    </NavBar>
    
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  },
  data: function(){
    authenticated: false;
  },methods: {
     setDetails(){
       this.authenticated = true ;
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

<template>
  <div id="app">
     <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png">
 <home></home>
   <Navigation>   </Navigation>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
import home from './components/home.vue'
export default {
  name: 'app',
  components: {
    'home':home,
    'Navigation' :Navigation
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
  margin-top: 60px;
}
</style>

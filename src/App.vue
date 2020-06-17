<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height:100%;
}
a{
  text-decoration:none;
  color:black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
</style>

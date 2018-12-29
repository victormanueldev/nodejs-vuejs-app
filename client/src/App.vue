<template>
  <div id="app">
<!-- <img src="./assets/logo.png"> -->
<router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin: 0;
  background-image: url(assets/back4.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>

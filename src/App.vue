<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </main>
  </div>
</template>
<script>
import AppHeader from '@com/layout/AppHeader'
export default {
  name: "app",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

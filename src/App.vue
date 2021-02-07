<template>
  <router-view></router-view>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
@import 'src/assets/theme';

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;

  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;

  height: 100%;

  background: $background;
}
</style>

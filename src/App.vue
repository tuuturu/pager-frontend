<template>
  <router-view></router-view>

  <div class="footer">
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')

      await this.$router.push('/')
    }
  }
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

.footer {
  position: absolute;
  bottom: 1em;

  padding: 0 1em;

  display: flex;
  justify-content: flex-end;

  width: 100%;
}

button {
  border: 0;
  background: transparent;

  text-decoration: $primaryTextColor underline;
  font-size: 12pt;

  padding: 1em;

  cursor: pointer;
}

button:hover {
  background: $primaryColor;
  color: $primaryTextColor;

  text-decoration: $primaryAccent underline;
}
</style>

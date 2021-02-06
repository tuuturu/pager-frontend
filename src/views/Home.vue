<template>
  <div class="Home"/>
</template>

<script>
import config from '../app.config'

export default {
  async created() {
    if (!this.$store.getters['auth/isAuthenticated']) {
      this.$store.dispatch('auth/login', `${config.VITE_BASE_URL}/feed`)
    } else {
      window.location.href = '/feed'
    }
  }
}
</script>

<style lang="scss">
.Home {
  margin: 0;
  height: 100%;

  background: #2c3e50;
}
</style>

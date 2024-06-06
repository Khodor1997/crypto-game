<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'

</script>

<template>
  <AppHeader/>
  <div class="main"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main {
  background: #111927;
  width: 100%;
  height: calc(100vh - 65px);
}
</style>

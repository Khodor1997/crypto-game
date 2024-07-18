<template>
  <Header />
  <div class="main">
    <ChartWidget />
  </div>
</template>

<script setup lang="ts">
import ChartWidget from "@/widgets/ChartWidget/ui/ChartWidget.vue";
</script>

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
  width: 100%;
  height: calc(100vh - 65px);
  padding: 16px;
  box-sizing: border-box;
  background: #111927;
}
</style>

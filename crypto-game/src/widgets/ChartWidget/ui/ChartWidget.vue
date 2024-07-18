<template>
  <div class="game">
    <EthPrice />
    <GameChart />
  </div>
</template>

<script setup lang="ts">
import { GameChart } from "@/features/Chart";
import { EthPrice } from "@/entities/EthPriceWidget";
</script>

<style scoped>
@import "style";
</style>

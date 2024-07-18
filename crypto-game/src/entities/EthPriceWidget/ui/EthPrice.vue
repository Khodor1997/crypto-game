<template>
  <div>
    <div class="eth-price">${{ ethPrice }}</div>
  </div>
</template>

<script setup lang="ts">
import { ethPrice } from "@/shared/model/ethPrice";
</script>
<style scoped>
.eth-price {
  font-family: "YapariBolt", sans-serif;
  color: #13e87d;
  font-size: 48px;
}
</style>

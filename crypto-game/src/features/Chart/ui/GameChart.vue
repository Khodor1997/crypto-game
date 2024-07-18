<template>
  <div id="chart">
    <VueApexCharts
      type="line"
      height="400"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import VueApexCharts from "vue3-apexcharts";

import { chartOptions } from "../model/chartOptions";
import { series, updateSeries } from "../model/dataChart";
import { fetchEthPrice } from "@/shared/model";

onMounted(() => {
  fetchEthPrice();
  setInterval(updateSeries, 1000);
});
</script>

import { maxEthPrice, minEthPrice } from "./";
import { ethPrice } from "@/shared/model/ethPrice";
import { lastDate } from "./";

export const chartOptions = {
  chart: {
    id: "realtime",
    height: 350,
    type: "line",
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Dynamic Updating Chart",
    align: "left",
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
    range: 10000,
    min: lastDate.value - 123100,
  },
  yaxis: {
    min: function () {
      if (ethPrice.value < minEthPrice.value) {
        minEthPrice.value = ethPrice.value - 3;
        maxEthPrice.value -= 3;
      }
      return minEthPrice.value;
    },
    max: function () {
      if (ethPrice.value > maxEthPrice.value) {
        maxEthPrice.value = ethPrice.value + 3;
        minEthPrice.value += 3;
      }
      return maxEthPrice.value;
    },
  },
  legend: {
    show: false,
  },
};
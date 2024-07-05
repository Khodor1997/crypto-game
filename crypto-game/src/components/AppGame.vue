<template>
    <div class="game">
        <div class="eth-price">${{ ethPrice }}</div>
        <div id="chart">
            <VueApexCharts type="line" height="400" ref="chart" :options="chartOptions" :series="series"></VueApexCharts>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted  } from 'vue';
import { getEthPrice } from '../api/getEthPrice';
import VueApexCharts from "vue3-apexcharts";

const ethPrice = ref<number>(0)

const getPrice = async () => {
    try {
        const price = await getEthPrice()
        ethPrice.value = Number(price.price)
        
    } catch (err) {
        console.log(err)
    }
}
//https://api.pro.coinbase.com/products/ETH-USD/ticker
//https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT
//https://api.coinbase.com/v2/prices/ETH-USD/spot
//https://api.bybit.com/v2/public/tickers?symbol=ETHUSD

setInterval(() => {
    getPrice()
}, 500);

// const series = ref([{data: []}]);
// let XAXISRANGE = 10000
const data = ref(getInitialData());
// const lastDate = ref(new Date().getTime());

const series = ref([{ data: getInitialData() }]);
const XAXISRANGE = 10000;
const lastDate = ref(new Date().getTime());

const chartOptions = {
  chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Dynamic Updating Chart',
    align: 'left'
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    range: XAXISRANGE,
    min: lastDate.value - 123100
  },
  yaxis: {
    // show: true,
    //   showAlways: false,
    //   showForNullSeries: true,
    //   seriesName: undefined,
    //   opposite: false,
    //   reversed: false,
    //   logarithmic: true,
    // //   logBase: 10,
    //   tickAmount: undefined,
      min: function() {
        let min = 3678
        if (ethPrice.value < min) {
            min = ethPrice.value - 1
        }
        return min
      },
      max: function() {
        let max = 3678
        if (ethPrice.value > max) {
            max = ethPrice.value + 1
        }
        return max
      },
    //   stepSize: undefined,
    //   forceNiceScale: false,
    //   floating: false,
    //   decimalsInFloat: undefined,
  },
  legend: {
    show: false
  }
};


const updateSeries = () => {
  getNewSeries(lastDate.value, { min: 1500, max: 4500 });
  series.value = [{ data: data.value }];
};

const resetDataInterval = () => {
  resetData();
  series.value = [{ data: data.value }];
};

function resetData() {
  data.value = getInitialData();
}

function getNewSeries(baseval, yrange) {
  const newDate = baseval + 200;
  lastDate.value = newDate;
    
  const newData = {
    x: newDate,
    y: ethPrice.value
  };
    
  data.value.push(newData);

  if (data.value.length > 1000) {
    data.value.shift();
  }
}

function getInitialData() {
  const now = new Date().getTime();
  return Array.from({ length: 10 }, (v, i) => ({
    x: now - i * 1000,
    y: Math.floor(Math.random() * 80) + 10
  })).reverse();
}

onMounted(() => {
  setInterval(updateSeries, 1000);
//   setInterval(resetDataInterval, 60000);
});

</script>

<style scoped>
.game {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 16px;
    height: 50vh;
}
.eth-price {
    font-family: "YapariBolt", sans-serif;
    color: #13e87d;
    font-size: 48px;
}
</style>
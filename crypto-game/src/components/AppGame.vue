<template>
    <div class="game">
        <div class="eth-price">${{ ethPrice }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getEthPrice } from '../api/getEthPrice';

const ethPrice = ref<string | undefined>(undefined)

const getPrice = async () => {
    try {
        const price = await getEthPrice()
        ethPrice.value = price.price
        console.log( price, 'ffffffff');
        
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
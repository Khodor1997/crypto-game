import { ref, watch } from "vue";
import { ethPrice } from "@/shared/model/ethPrice";

export const maxEthPrice = ref<number>(0);
export const minEthPrice = ref<number>(0);

const updateMinMaxPrices = (price: number) => {
  if (!maxEthPrice.value && !minEthPrice.value) {
    minEthPrice.value = price - 3;
    maxEthPrice.value = price + 3;
  }
};

// Следим за изменением цены и обновляем минимальную и максимальную цену
watch(ethPrice, (newPrice) => {
  updateMinMaxPrices(newPrice);
});
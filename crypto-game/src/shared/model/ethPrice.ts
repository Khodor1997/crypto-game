import { ref } from "vue";
import { getEthPrice } from "@/shared/api";

export const ethPrice = ref<number>(0);

export const fetchEthPrice = async () => {
  try {
    const price = await getEthPrice();
    ethPrice.value = Number(price.price);
  } catch (err) {
    console.log(err);
  }
};

setInterval(() => {
  fetchEthPrice();
}, 500);
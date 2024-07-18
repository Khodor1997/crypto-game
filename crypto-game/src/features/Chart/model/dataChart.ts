import { ref } from "vue";
import { ethPrice } from "@/shared/model/ethPrice";

export const data = ref(getInitialData());
export const series = ref([{ data: getInitialData() }]);
export const lastDate = ref(new Date().getTime());

export const updateSeries = () => {
  getNewSeries(lastDate.value);
  series.value = [{ data: data.value }];
};

function getNewSeries(baseval: number) {
  const newDate = baseval + 200;
  lastDate.value = newDate;

  const newData = {
    x: newDate,
    y: ethPrice.value,
  };

  data.value.push(newData);

  if (data.value.length > 1000) {
    data.value.shift();
  }
}

function getInitialData() {
  const now = new Date().getTime();
  return Array.from({ length: 10 }, (_, i) => ({
    x: now - i * 1000,
    y: Math.floor(Math.random() * 80) + 10,
  })).reverse();
}

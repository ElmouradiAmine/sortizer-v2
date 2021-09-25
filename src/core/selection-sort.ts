import { BarData } from "../store/store";

const selectionSort = (array: BarData[], callback: Function) => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min].height > array[j].height) {
        min = j;
      }
      callback(array.slice(), [j, min]);
    }
    const temp = { ...array[i] };
    array[i] = { ...array[min] };
    array[min] = { ...temp };
    callback(array.slice(), [i, min]);
  }
  callback(array.slice(), []);
};

export default selectionSort;

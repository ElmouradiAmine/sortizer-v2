import { BarData } from "../store/store";

const insertionSort = (array: BarData[], callback: Function) => {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && key.height < array[j].height) {
      array[j + 1] = { ...array[j] };
      j--;
      callback(array.slice(), [j + 1]);
    }
    array[j + 1] = { ...key };
    callback(array.slice(), [j + 1]);
  }
  callback(array.slice(), []);
};

export default insertionSort;

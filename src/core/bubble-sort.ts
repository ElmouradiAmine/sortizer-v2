import { BarData } from "../store/store";

const bubbleSort = (array: BarData[], callback: Function) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j + 1].height < array[j].height) {
        const temp = { ...array[j + 1] };
        array[j + 1] = { ...array[j] };
        array[j] = { ...temp };
      }
      callback(array.slice(), [j, j + 1]);
    }
  }
  callback(array.slice(), []);
};

export default bubbleSort;

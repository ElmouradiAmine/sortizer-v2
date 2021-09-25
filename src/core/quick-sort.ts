import { BarData } from "../store/store";

const quickSort = (array: BarData[], callback: Function) => {
  callback(array.slice(), []);
  quickSortAux(array, 0, array.length - 1, callback);
  callback(array.slice(), []);
};
const quickSortAux = (
  array: BarData[],
  start: number,
  end: number,
  callback: Function
) => {
  if (start < end) {
    const pivot = partition(array, start, end, callback);
    quickSortAux(array, start, pivot - 1, callback);
    quickSortAux(array, pivot + 1, end, callback);
  }
};

const partition = (
  array: BarData[],
  start: number,
  end: number,
  callback: Function
) => {
  const pivot = { ...array[end] };
  let i = start - 1;
  callback(array.slice(), [start, end]);

  for (let j = start; j <= end; j++) {
    if (array[j].height < pivot.height) {
      i++;
      const temp = { ...array[j] };
      array[j] = { ...array[i] };
      array[i] = { ...temp };
      callback(array.slice(), [i, j]);
    }
  }
  array[end] = { ...array[i + 1] };
  array[i + 1] = { ...pivot };
  return i + 1;
};

export default quickSort;

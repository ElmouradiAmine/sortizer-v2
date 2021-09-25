import { BarData } from "../store/store";

const mergeSort = (array: BarData[], callback: Function) => {
  callback(array.slice(), []);

  mergeSortAux(array, 0, array.length - 1, callback);
  callback(array.slice(), []);
};

const mergeSortAux = (
  array: BarData[],
  p: number,
  q: number,
  callback: Function
) => {
  if (p >= q) return;
  let mid = Math.floor((p + q) / 2);
  mergeSortAux(array, p, mid, callback);
  mergeSortAux(array, mid + 1, q, callback);
  merge(array, p, mid, q, callback);
};

const merge = (
  array: BarData[],
  p: number,
  mid: number,
  q: number,
  callback: Function
) => {
  const left = array.slice(p, mid + 1);
  const right = array.slice(mid + 1, q + 1);

  let i = 0;
  let j = 0;
  let k = p;

  while (i < left.length && j < right.length) {
    callback(array.slice(), [k]);

    if (left[i].height < right[j].height) {
      array[k] = { ...left[i] };
      i++;
    } else {
      array[k] = { ...right[j] };
      j++;
    }
    k++;
  }

  while (i < left.length) {
    callback(array.slice(), [k]);

    array[k] = { ...left[i] };
    k++;
    i++;
  }

  while (j < right.length) {
    callback(array.slice(), [k]);
    array[k] = { ...right[j] };
    k++;
    j++;
  }
};

export default mergeSort;

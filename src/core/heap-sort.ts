import { BarData } from "../store/store";

const heapSort = (array: BarData[], callback: Function) => {
  callback(array.slice(), []);

  buildMaxheap(array, callback);
  for (let i = array.length - 1; i >= 0; i--) {
    let key = { ...array[0] };
    array[0] = { ...array[i] };
    array[i] = { ...key };
    maxHeapify(array, 0, i, callback);
  }
  callback(array.slice(), []);
};

const left = (index: number) => {
  return 2 * index + 1;
};

const right = (index: number) => {
  return 2 * (index + 1);
};

const buildMaxheap = (array: BarData[], callback: Function) => {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    maxHeapify(array, i, array.length, callback);
  }
};

const maxHeapify = (
  array: BarData[],
  index: number,
  heapSize: number,
  callback: Function
) => {
  let l = left(index);
  let r = right(index);
  let largest = index;

  if (l < heapSize && array[l].height > array[largest].height) {
    largest = l;
  }

  if (r < heapSize && array[r].height > array[largest].height) {
    largest = r;
  }

  if (largest !== index) {
    let key = { ...array[index] };
    array[index] = { ...array[largest] };
    array[largest] = { ...key };
    callback(array.slice(), [index, largest]);
    maxHeapify(array, largest, heapSize, callback);
  }
};

export default heapSort;

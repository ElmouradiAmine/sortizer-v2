import { Algorithms } from "../constants/constants";
import bubbleSort from "../core/bubble-sort";
import insertionSort from "../core/insertion-sort";
import selectionSort from "../core/selection-sort";
import mergeSort from "../core/merge-sort";
import { BarData } from "../store/store";
import quickSort from "../core/quick-sort";
import heapSort from "../core/heap-sort";

export const generateRandomArray = (
  length: number,
  min: number,
  max: number
): BarData[] => {
  const array: BarData[] = [];
  for (let i = 0; i < length; i++) {
    array.push({
      height: Math.floor(Math.random() * (max - min) + min),
      bgColor: "teal",
    });
  }
  return array;
};

export const generateAnimation = (array: BarData[], algorithm: Algorithms) => {
  const animation: BarData[][] = [];
  const animationCallback = (frame: BarData[], activeBarsIdx: number[]) => {
    activeBarsIdx.forEach((idx) => {
      frame[idx] = {
        ...frame[idx],
        bgColor: "yellow",
      };
    });
    animation.push(frame);
  };

  switch (algorithm) {
    case Algorithms.BUBBLE_SORT:
      bubbleSort(array, animationCallback);
      break;
    case Algorithms.SELECTION_SORT:
      selectionSort(array, animationCallback);
      break;
    case Algorithms.MERGE_SORT:
      mergeSort(array, animationCallback);
      break;
    case Algorithms.QUICK_SORT:
      quickSort(array, animationCallback);
      break;
    case Algorithms.HEAP_SORT:
      heapSort(array, animationCallback);
      break;
    default:
      insertionSort(array, animationCallback);
      break;
  }

  return animation;
};

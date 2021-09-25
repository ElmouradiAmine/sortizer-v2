import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  Algorithms,
  AnimationSpeed,
  AnimationState,
  ArraySize,
} from "../constants/constants";
import { generateAnimation, generateRandomArray } from "../utils/utils";

export interface BarData {
  height: number;
  bgColor: string;
}

interface Store {
  theme: string;
  height: number;
  barsData: BarData[];
  animationData: BarData[][];
  activeBarAnimationData: number[];
  algorithm: Algorithms;
  currentFrame: number;
  intervalId: number | undefined;
  animationSpeed: number;
  animationState: AnimationState;
  arraySize: number;
  generateBarsData: () => void;
  setBarsData: (barsData: BarData[]) => void;
  startAnimation: (animationSpeed: number | undefined) => void;
  setAlgorithm: (algorithm: Algorithms) => void;
  generateAnimationData: () => void;
  incrementCurrentFrame: () => void;
  resetCurrentFrame: () => void;
  resetAnimationData: () => void;
  setHeight: (height: number) => void;
  removeInterval: () => void;
  setAnimationState: (animationState: AnimationState) => void;
  setArraySize: (arraySize: number) => void;
  setAnimationSpeed: (animationSpeed: number) => void;
  toggleTheme: () => void;
}

const useStore = create<Store>(
  devtools((set, get) => ({
    theme: "light",
    intervalId: undefined,
    height: 0,
    arraySize: ArraySize.DEFAULT,
    barsData: [],
    animationData: [],
    activeBarAnimationData: [],
    animationSpeed: AnimationSpeed.DEFAULT,
    animationState: AnimationState.IDLE,
    currentFrame: 0,
    algorithm: Algorithms.INSERTION_SORT,
    toggleTheme: () =>
      set((state) => {
        if (state.theme === "light") {
          return { theme: "dark" };
        }
        return { theme: "light" };
      }),
    generateBarsData: () =>
      set(
        ({
          height,
          resetAnimationData,
          resetCurrentFrame,
          setAnimationState,
          removeInterval,
          arraySize,
        }) => {
          removeInterval();
          resetAnimationData();
          resetCurrentFrame();
          setAnimationState(AnimationState.IDLE);
          return {
            barsData: generateRandomArray(arraySize, 1, height),
          };
        }
      ),
    generateAnimationData: () =>
      set((state) => {
        return {
          animationData: generateAnimation(
            state.barsData.slice(),
            state.algorithm
          ),
        };
      }),
    startAnimation: (animationSpeed) =>
      set(
        ({
          generateAnimationData,
          setBarsData,
          incrementCurrentFrame,
          removeInterval,
          setAnimationState,
          resetCurrentFrame,
          animationState,
        }) => {
          removeInterval();
          if (animationState === AnimationState.IDLE) {
            generateAnimationData();
          } else if (animationState === AnimationState.RUNNING) {
            setAnimationState(AnimationState.PAUSED);
            return { intervalId: undefined };
          }

          if (animationState !== AnimationState.PAUSED) resetCurrentFrame();
          setAnimationState(AnimationState.RUNNING);
          let currentAnimationSpeed;
          if (animationSpeed) currentAnimationSpeed = animationSpeed;
          else currentAnimationSpeed = get().animationSpeed;
          const intervalId = setInterval(() => {
            const { currentFrame, animationData } = get();
            if (currentFrame < animationData.length) {
              setBarsData(animationData[currentFrame]);
              incrementCurrentFrame();
            } else {
              removeInterval();
              setAnimationState(AnimationState.FINISHED);
            }
          }, AnimationSpeed.MAX - currentAnimationSpeed);
          return { intervalId };
        }
      ),
    removeInterval: () =>
      set(({ intervalId }) => {
        clearInterval(intervalId);
        return { intervalId: undefined };
      }),
    setHeight: (height) => set({ height }),
    setAlgorithm: (algorithm) =>
      set((state) => {
        state.generateBarsData();
        return { algorithm };
      }),
    setBarsData: (barsData) => set({ barsData }),
    incrementCurrentFrame: () =>
      set((state) => ({ currentFrame: state.currentFrame + 1 })),
    resetCurrentFrame: () => set({ currentFrame: 0 }),
    resetAnimationData: () => set({ animationData: [] }),
    setAnimationState: (animationState: AnimationState) =>
      set({ animationState }),
    setArraySize: (arraySize) => set({ arraySize }),
    setAnimationSpeed: (animationSpeed) =>
      set(({ animationState, setAnimationState, startAnimation }) => {
        if (animationState === AnimationState.RUNNING) {
          setAnimationState(AnimationState.PAUSED);
          startAnimation(animationSpeed);
        }
        return { animationSpeed };
      }),
  }))
);

export default useStore;

import {
  HStack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";

import {
  Algorithms,
  AnimationSpeed,
  AnimationState,
  ArraySize,
} from "../../../constants/constants";
import useStore from "../../../store/store";

const ConfigPanel = () => {
  const setAlgorithm = useStore((state) => state.setAlgorithm);
  const generateBarsData = useStore((state) => state.generateBarsData);
  const startAnimation = useStore((state) => state.startAnimation);
  const animationState = useStore((state) => state.animationState);
  const arraySize = useStore((state) => state.arraySize);
  const setArraySize = useStore((state) => state.setArraySize);
  const setAnimationSpeed = useStore((state) => state.setAnimationSpeed);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    generateBarsData();
  }, [arraySize]);

  const getButtonLabel = (): string => {
    switch (animationState) {
      case AnimationState.IDLE:
        return "Start";
      case AnimationState.PAUSED:
        return "Resume";
      case AnimationState.RUNNING:
        return "Stop";
      case AnimationState.FINISHED:
        return "Restart";
    }
  };

  const getButtonColor = (): string => {
    switch (animationState) {
      case AnimationState.IDLE:
        return "teal";
      case AnimationState.PAUSED:
        return "orange";
      case AnimationState.RUNNING:
        return "red";
      case AnimationState.FINISHED:
        return "green";
    }
  };

  return (
    <HStack
      rounded="md"
      shadow="base"
      padding="2"
      bgColor={theme === "light" ? "white" : "#2c2f33"}
      border={theme === "light" ? "none" : "1px solid rgba(129,131,132,0.15)"}
    >
      <Spacer />
      <Select
        width="200px"
        onChange={(event) => setAlgorithm(event.target.value as Algorithms)}
        color={theme === "light" ? "gray.700" : "white"}
        borderColor={theme === "light" ? "inherit" : "rgba(129,131,132,0.15)"}
      >
        <option value={Algorithms.INSERTION_SORT}>Insertion Sort</option>
        <option value={Algorithms.BUBBLE_SORT}>Bubble Sort</option>
        <option value={Algorithms.SELECTION_SORT}>Selection Sort</option>
        <option value={Algorithms.MERGE_SORT}>Merge Sort</option>
        <option value={Algorithms.QUICK_SORT}>Quick Sort</option>
        <option value={Algorithms.HEAP_SORT}>Heap Sort</option>
      </Select>
      <VStack spacing={0} padding="0 8px">
        <HStack>
          <Text
            color={theme === "light" ? "gray.700" : "white"}
            fontWeight="semibold"
            fontSize="sm"
          >
            Array size
          </Text>
          <Slider
            aria-label="Array Size slider"
            min={ArraySize.MIN}
            max={ArraySize.MAX}
            value={arraySize}
            step={20}
            width="100px"
            colorScheme="teal"
            onChange={setArraySize}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>
        <HStack>
          <Text
            color={theme === "light" ? "gray.700" : "white"}
            fontWeight="semibold"
            fontSize="sm"
          >
            Animation
          </Text>
          <Slider
            aria-label="slider-ex-1"
            step={100}
            max={AnimationSpeed.MAX}
            min={AnimationSpeed.MIN}
            defaultValue={AnimationSpeed.DEFAULT}
            onChangeEnd={setAnimationSpeed}
            width="100px"
            colorScheme="teal"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>
      </VStack>
      <Button colorScheme="blue" onClick={generateBarsData}>
        Random
      </Button>
      <Button
        colorScheme={getButtonColor()}
        onClick={() => startAnimation(undefined)}
      >
        {getButtonLabel()}
      </Button>
      <Spacer />
    </HStack>
  );
};

export default ConfigPanel;

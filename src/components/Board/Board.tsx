import { useEffect, useRef } from "react";
import shallow from "zustand/shallow";
import { HStack } from "@chakra-ui/react";
import { v4 as uuidV4 } from "uuid";
import { ArraySize } from "../../constants/constants";
import Bar from "./Bar/Bar";
import useSize from "../../hooks/use-size";
import useStore from "../../store/store";

const Board = () => {
  const boardRef = useRef(null);
  const { height } = useSize(boardRef);
  const barsData = useStore((state) => state.barsData, shallow);
  const setHeight = useStore((state) => state.setHeight);
  const generateBarsData = useStore((state) => state.generateBarsData);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    setHeight(height);
    generateBarsData();
  }, [height]);

  return (
    <HStack
      as="section"
      bgColor={theme === "light" ? "white" : "#2c2f33"}
      border={theme === "light" ? "none" : "1px solid rgba(129,131,132,0.15)"}
      height="100%"
      maxW="1140px"
      margin="auto"
      rounded="md"
      shadow="md"
      spacing="0.5"
      padding="8"
      alignItems="flex-end"
      ref={boardRef}
    >
      {barsData.map((barData) => (
        <Bar
          key={uuidV4()}
          height={(barData.height / height) * 100}
          bgColor={barData.bgColor}
        />
      ))}
    </HStack>
  );
};

export default Board;

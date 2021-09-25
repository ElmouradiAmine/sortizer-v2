import { Box } from "@chakra-ui/react";

interface BarProps {
  height: number;
  bgColor: string;
}
const Bar = ({ height, bgColor }: BarProps) => {
  return (
    <Box
      bgColor={`${bgColor}.400`}
      width="100%"
      height={`${height}%`}
      rounded="md"
      transition="all 0.3s"
    ></Box>
  );
};

export default Bar;

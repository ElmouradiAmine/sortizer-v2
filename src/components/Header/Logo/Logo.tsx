import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import useStore from "../../../store/store";

const Logo = () => {
  const theme = useStore((state) => state.theme);

  return (
    <HStack>
      <Flex
        bgGradient="linear(to-b, teal.300, teal.500)"
        w="36px"
        h="36px"
        rounded="md"
        spacing="0"
        alignItems="center"
        justifyContent="center"
      >
        <HStack alignItems="flex-end" flexDir="row" spacing="0.5">
          <Box bgColor="white" width="5px" height="8px" rounded="md" />
          <Box bgColor="white" width="5px" height="16px" rounded="md" />
          <Box bgColor="white" width="5px" height="22px" rounded="md" />
        </HStack>
      </Flex>
      <Text
        color={theme === "light" ? "gray.700" : "white"}
        fontSize="2xl"
        as="h1"
        fontWeight="bold"
      >
        sortizer
      </Text>
    </HStack>
  );
};

export default Logo;

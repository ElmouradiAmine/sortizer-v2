import { Text, Image, HStack } from "@chakra-ui/react";
import useStore from "../../store/store";

const Footer = () => {
  const theme = useStore((state) => state.theme);

  return (
    <HStack
      as="footer"
      alignItems="center"
      justifyContent="center"
      color={theme === "light" ? "gray.700" : "white"}
      fontSize="sm"
    >
      <Text>Proudly Made in</Text>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        alt="france flag"
        margin="0 8px"
        h="12px"
      />
      <Text>by Amine Elmouradi</Text>
    </HStack>
  );
};

export default Footer;

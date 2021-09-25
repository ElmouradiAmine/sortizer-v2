import { HStack } from "@chakra-ui/react";
import useStore from "../../store/store";
import ConfigPanel from "./ConfigPanel/ConfigPanel";
import Logo from "./Logo/Logo";
import SocialLinks from "./SocialLinks/SocialLinks";

const Header = () => {
  const theme = useStore((state) => state.theme);

  return (
    <HStack
      bgColor={theme === "light" ? "white" : "#2c2f33"}
      border={theme === "light" ? "none" : "1px solid rgba(129,131,132,0.15)"}
      shadow="sm"
      as="header"
      justifyContent="center"
    >
      <HStack
        padding="0 32px"
        justifyContent="space-between"
        maxWidth="1440px"
        width="100%"
      >
        <Logo />
        <ConfigPanel />
        <SocialLinks />
      </HStack>
    </HStack>
  );
};

export default Header;

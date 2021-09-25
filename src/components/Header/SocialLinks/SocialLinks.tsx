import { HStack, Link, Box, Spacer } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import GitHubButton from "react-github-btn";
import useStore from "../../../store/store";
const SocialLinks = () => {
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  return (
    <HStack spacing={5} color="gray.400" alignItems="center">
      <Link
        _hover={{
          color: "gray.600",
        }}
        href="https://github.com/ElmouradiAmine/sortizer-v2"
        target="_blank"
      >
        <FaGithub size="1.2em" />
      </Link>
      <Link
        _hover={{
          color: "gray.600",
        }}
        href="https://www.linkedin.com/in/amine-elmouradi-599702183/"
        target="_blank"
      >
        <FaLinkedin size="1.2em" />
      </Link>
      <Link
        _hover={{
          color: "gray.600",
        }}
      >
        {theme === "light" ? (
          <FaMoon size="1.2em" onClick={toggleTheme} />
        ) : (
          <FaSun size="1.2em" onClick={toggleTheme} />
        )}
      </Link>
      <Spacer />
      <Box transform="translateY(2px)">
        <GitHubButton
          href="https://github.com/ElmouradiAmine/sortizer-v2"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star elmouradiAmine/imagix-api on GitHub"
        >
          Star
        </GitHubButton>
      </Box>
    </HStack>
  );
};

export default SocialLinks;

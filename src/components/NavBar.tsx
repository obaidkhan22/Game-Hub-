import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" marginTop={1}>
        <Image src={logo} boxSize="60px " cursor="pointer" marginX={3} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;

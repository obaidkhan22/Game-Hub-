import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" marginTop={1}>
        <Link to="/">
          <Image
            src={logo}
            boxSize="60px "
            cursor="pointer"
            marginX={2}
            objectFit="cover"
          />
        </Link>

        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;

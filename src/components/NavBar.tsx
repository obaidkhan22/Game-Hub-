import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearchText: (searchText: string) => void;
}
const NavBar = ({ onSearchText }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" marginTop={1}>
        <Image src={logo} boxSize="60px " cursor="pointer" marginX={2} />
        <SearchInput onSearchText={onSearchText} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;

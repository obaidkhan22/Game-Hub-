import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

import { Platform } from "./../hooks/useGames";

interface Props {
  onPlatformSelect: (Platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Text fontWeight={selectedPlatform ? "bold" : "medium"}>
          {selectedPlatform?.name ? selectedPlatform.name : "Platforms"}
        </Text>
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onPlatformSelect(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

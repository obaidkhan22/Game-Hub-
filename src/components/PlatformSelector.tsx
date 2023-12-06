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
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onPlatformSelect: (Platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onPlatformSelect, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Text fontWeight={platform ? "bold" : "medium"}>
          {platform?.name ? platform.name : "Platforms"}
        </Text>
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
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

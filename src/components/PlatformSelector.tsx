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
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../hooks/store";


const PlatformSelector = () => {
  const platformId = useGameQueryStore(s=> s.gameQuery.platformId)
  const setPlatformId = useGameQueryStore(s=> s.setPlatformId)
  const { data, error } = usePlatforms();
  const platform = usePlatform(platformId);
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
            onClick={() => setPlatformId(platform.id)}
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

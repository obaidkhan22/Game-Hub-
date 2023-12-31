import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../hooks/store";

const SortSelector = () => {
  const sortOrder = useGameQueryStore(s=> s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s=> s.setSortOrder)
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "Release Date" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <HStack>
          <Text color={"gray.500"}>Order By:</Text>
          <Text fontWeight="bold">
            {currentSortOrder?.label || "Relevance"}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.label}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

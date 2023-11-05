import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack marginLeft={2}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text marginRight={4} fontWeight="bold" whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;

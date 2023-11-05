import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search games"
        borderRadius={30}
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;

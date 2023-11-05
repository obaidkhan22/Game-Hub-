import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form>
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
    </form>
  );
};

export default SearchInput;

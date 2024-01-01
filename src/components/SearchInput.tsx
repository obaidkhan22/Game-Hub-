import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../hooks/store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore(s => s.setSeacrchText)
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />

        <Input
          ref={ref}
          placeholder="Search games"
          borderRadius={30}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

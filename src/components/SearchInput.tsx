import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearchText: (searchText: string) => void;
}
const SearchInput = ({ onSearchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchText(ref.current.value);
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

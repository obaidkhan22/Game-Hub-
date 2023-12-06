import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
  const genre = useGenre(gameQuary.genreId);
  const platform = usePlatform(gameQuary.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading fontSize="6xl">{heading}</Heading>;
};

export default GameHeading;

import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuary.platformId
  );
  const genre = genres?.results.find((g) => g.id === gameQuary.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading fontSize="6xl">{heading}</Heading>;
};

export default GameHeading;

import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import useGameQueryStore from "../hooks/store";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../service/getCroppedImage";


const GenresList = () => {
  const genreId = useGameQueryStore(s=> s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s=> s.setGenreId)
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List marginX={4}>
      <Heading fontSize={30} marginTop={3}>
        Genres
      </Heading>
      {data?.results.map((genre) => (
        <HStack key={genre.id} marginY={3}>
          <Image
            boxSize={8}
            borderRadius={5}
            objectFit="cover"
            src={getCroppedImage(genre.image_background)}
          />
          <Button
            fontWeight={genreId === genre.id ? "bold" : "normal"}
            whiteSpace="normal"
            textAlign="left"
            fontSize="18px"
            variant="link"
            onClick={() => setSelectedGenreId(genre.id)}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </List>
  );
};

export default GenresList;

import {
  HStack,
  List,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../service/getCroppedImage";
import useGenre from "../hooks/useGenre";

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenresList = ({ onGenreSelect, selectedGenreId }: Props) => {
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
            fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
            whiteSpace="normal"
            textAlign="left"
            fontSize="18px"
            variant="link"
            onClick={() => onGenreSelect(genre)}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </List>
  );
};

export default GenresList;

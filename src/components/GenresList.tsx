import { HStack, List, Image, Button, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../service/getCroppedImage";
import genres from "../data/genres";
interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenresList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  console.log(data);
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List marginX={4}>
      {data.map((genre) => (
        <HStack key={genre.id} marginY={3}>
          <Image
            boxSize={8}
            borderRadius={5}
            objectFit="cover"
            src={getCroppedImage(genre.image_background)}
          />
          <Button
            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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

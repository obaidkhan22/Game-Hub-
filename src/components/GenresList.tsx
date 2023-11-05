import { HStack, List, Image, Button, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../service/getCroppedImage";
interface Props {
  onGenreSelect: (genre: Genre) => void;
}
const GenresList = ({ onGenreSelect }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <List marginX={4}>
      {isLoading && <Spinner></Spinner>}
      {data.map((genre) => (
        <HStack key={genre.id} marginY={3}>
          <Image
            boxSize={8}
            borderRadius={5}
            objectFit="cover"
            src={getCroppedImage(genre.image_background)}
          />
          <Button
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
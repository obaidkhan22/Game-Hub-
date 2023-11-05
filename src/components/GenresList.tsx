import {
  HStack,
  List,
  Image,
  ListItem,
  Text,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../service/getCroppedImage";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <List padding={5}>
      {isLoading && <Spinner></Spinner>}
      {data.map((genre) => (
        <HStack key={genre.id} marginY={2}>
          <Image
            boxSize={8}
            borderRadius={10}
            objectFit="cover"
            src={getCroppedImage(genre.image_background)}
          />
          <Button fontSize="18px" variant="link">
            {genre.name}
          </Button>
        </HStack>
      ))}
    </List>
  );
};

export default GenresList;

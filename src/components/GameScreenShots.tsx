import { Img, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";
interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} marginTop={3}>
      {data?.results.map((file) => (
        <Img key={file.id} src={file.image} borderRadius={4} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;

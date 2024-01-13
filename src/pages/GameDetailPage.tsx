import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandebleText from "../components/ExpandebleText";
import useGame from "./../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandebleText>{game.description_raw}</ExpandebleText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;

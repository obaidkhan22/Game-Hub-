import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="20px" overflow="hidden" marginBottom={4}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading color="gray.200" fontSize="2xl">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImage from "../service/getCroppedImage";
import PlatFormIcons from "./PlatFormIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="20px" overflow="hidden" marginBottom={4}>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading color="gray.200" fontSize="2xl">
          {game.name}
        </Heading>
        <PlatFormIcons
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;

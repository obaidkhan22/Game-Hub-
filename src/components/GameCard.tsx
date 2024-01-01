import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImage from "../service/getCroppedImage";
import PlatFormIcons from "./PlatFormIcons";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
      borderRadius="20px"
      overflow="hidden"
      marginBottom={4}
    >
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginY={2}>
          <PlatFormIcons
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

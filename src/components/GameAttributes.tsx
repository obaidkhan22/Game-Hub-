import { Game } from "../entity/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publish) => (
            <Text key={publish.id}>{publish.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;

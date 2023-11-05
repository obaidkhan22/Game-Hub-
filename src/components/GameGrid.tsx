import { GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

import { GameQuary } from "../App";
interface Props {
  gameQuary: GameQuary;
}
const GameGrid = ({ gameQuary }: Props) => {
  const { data, error, isLoading } = useGames(gameQuary);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return null;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={4}
      marginY={5}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GridItem key={game.id}>
          <GameCard game={game} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

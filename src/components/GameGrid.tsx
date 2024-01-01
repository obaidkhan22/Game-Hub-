import { Button, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) return null;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        marginY={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GridItem key={game.id}>
                <GameCard game={game} />
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <HStack justifyContent={"center"} marginBottom={5}>
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()} paddingX={10}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </HStack>
    </>
  );
};

export default GameGrid;

import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenresList from "../components/GenresList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <GameHeading />
        <HStack marginBottom={10} spacing={6} marginTop={2}>
          <SortSelector />
          <PlatformSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Home;

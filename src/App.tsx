import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList.1";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuary {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuary, setGameQuary] = useState<GameQuary>({} as GameQuary);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearchText={(searchText) =>
            setGameQuary({ ...gameQuary, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenresList
            selectedGenreId={gameQuary?.genreId}
            onGenreSelect={(genre) =>
              setGameQuary({ ...gameQuary, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <GameHeading gameQuary={gameQuary} />
        <HStack marginBottom={10} spacing={6} marginTop={2}>
          <SortSelector
            sortOrder={gameQuary.sortOrder}
            onSortSelect={(sortOrder) =>
              setGameQuary({ ...gameQuary, sortOrder })
            }
          />
          <PlatformSelector
            selectedPlatformId={gameQuary.platformId}
            onPlatformSelect={(platform) =>
              setGameQuary({ ...gameQuary, platformId: platform.id })
            }
          />
        </HStack>
        <GameGrid gameQuary={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;

import useData from "./useData";

import { GameQuary } from "./../App";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuary: GameQuary) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuary?.genre?.id,
        platforms: gameQuary?.platform?.id,
      },
    },
    [gameQuary]
  );

export default useGames;

import { useQuery } from "@tanstack/react-query";
import { GameQuary } from "./../App";
import apiClient, { FetchResponse } from "../service/api-client";
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
  rating_top: number;
}

const useGames = (gameQuary: GameQuary) =>
  useQuery({
    queryKey: ["games", gameQuary],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuary?.genre?.id,
            parent_platforms: gameQuary?.platform?.id,
            ordering: gameQuary.sortOrder,
            search: gameQuary?.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;

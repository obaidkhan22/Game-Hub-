import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuary } from "./../App";
import APIClient, { FetchResponse } from "../service/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuary: GameQuary) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuary],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuary?.genreId,
          parent_platforms: gameQuary?.platformId,
          ordering: gameQuary.sortOrder,
          search: gameQuary?.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGames;

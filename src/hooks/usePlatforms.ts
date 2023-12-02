import { useQuery } from "@tanstack/react-query";
import apiClient from "../service/api-client";
import platforms from "../data/platforms";
import { Platform } from "./useGames";
import { FetchResponse } from './../service/api-client';

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/parents_platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;

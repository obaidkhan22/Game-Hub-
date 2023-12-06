import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";

import APIClient from "./../service/api-client";

const apiClient = new APIClient<Genre>("/geners");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres, next: null },
  });
};

export default useGenres;

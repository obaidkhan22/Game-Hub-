import { useQuery } from "@tanstack/react-query";

import APIClient from "./../service/api-client";
import ms from "ms";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;

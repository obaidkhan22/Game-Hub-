import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../service/api-client";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface RequestGameData {
  count: number;
  results: Genre[];
}
const useGames = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<RequestGameData>("/genres", { signal: controller.signal })
      .then((res) => (setGenres(res.data.results), setLoading(false)))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGames;

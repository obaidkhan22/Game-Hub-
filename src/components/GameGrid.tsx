import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
interface Game {
  id: number;
  name: string;
}

interface RequestGameData {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    apiClient
      .get<RequestGameData>("/games")
      .then((res) => setGames(res.data.results));
  });
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;

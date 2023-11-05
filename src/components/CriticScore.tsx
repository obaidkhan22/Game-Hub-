import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 65 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} paddingX={2} paddingY={1} borderRadius={10}>
      {score}
    </Badge>
  );
};

export default CriticScore;

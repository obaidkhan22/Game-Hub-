import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => (
  <Card borderRadius="20px" overflow="hidden">
    <Skeleton height="200px"></Skeleton>
    <CardBody>
      <SkeletonText></SkeletonText>
    </CardBody>
  </Card>
);

export default GameCardSkeleton;

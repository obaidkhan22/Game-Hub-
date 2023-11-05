import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatFormIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    ios: MdPhoneIphone,
    mac: FaApple,
    playstation: FaPlaystation,
    linux: FaLinux,
    web: BsGlobe,
    nintendo: SiNintendo,
    android: FaAndroid,
    xbox: FaXbox,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatFormIcons;

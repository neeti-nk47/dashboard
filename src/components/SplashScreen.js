import { Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./vite.svg";

function SplashScreen() {
  return (
    <>
      <Center>
        <Image src={Logo} boxSize="500px" objectFit="cover" />
      </Center>
      <Center fontSize="8rem">
        <Text> Gym Name</Text>
      </Center>
    </>
  );
}

export default SplashScreen;

import { Box, HStack, Spacer, Text, Image } from "@chakra-ui/react";
import ConnectWalletButton from "./ConnectWalletButton";

type NavBarProps = {};

export const NavBar = ({}: NavBarProps) => {
  return (
    <HStack h={20} px={2}>
      <Image src="vite.svg" mr="2" />

      <Text as="h1" fontSize="5xl">
        ZkShop
      </Text>

      <Spacer />

      <Box display="flex" alignItems="center">
        <ConnectWalletButton />
      </Box>
    </HStack>
  );
};

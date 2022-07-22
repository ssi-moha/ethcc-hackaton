import { Box, HStack, Spacer } from "@chakra-ui/react";
import ConnectWalletButton from "./ConnectWalletButton";

type NavBarProps = {};

export const NavBar = ({}: NavBarProps) => {
  return (
    <HStack h={20} px={2}>
      <div> Logo </div>

      <div> Brand </div>

      <Spacer />

      <Box>
        <ConnectWalletButton />
      </Box>
    </HStack>
  );
};

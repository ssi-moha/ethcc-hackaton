import {
  Box,
  HStack,
  Spacer,
  Text,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ConnectWalletButton from "./ConnectWalletButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import SismoBanner from "./SismoBanner";
import useGetAppProducts from "../hooks/useGetAppProducts";
import { useEffect } from "react";

export const NavBar = ({ admin }: { admin: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { app, refresh } = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");

  return (
    <HStack h={24} px={2} as="header">
      <Button mr={4} bgColor="white" onClick={onOpen}>
        <HamburgerIcon w={8} h={8} />
      </Button>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">ZkShop</DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"}>
            <Box mt={6}>
              <Button as={NavLink} to="/" onClick={onClose}>
                Misfitwear Shop
              </Button>
            </Box>

            <Box mt={4}>
              <Button as={NavLink} to="/admin" onClick={onClose}>
                Admin
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Image src="vite.svg" mr="2" />

      <Text as="h1" fontSize="5xl">
        ZkShop
      </Text>

      <Spacer />

      {!admin && (
        <Box display="flex" alignItems="center" flexDirection="column" py={8}>
          <ConnectWalletButton />
          {app !== null && app.sismo && <SismoBanner />}
        </Box>
      )}
    </HStack>
  );
};

import { HStack, Image, Link, Text } from "@chakra-ui/react";
import SismoLogo from "../assets/sismo.jpeg";

const SismoBanner = () => {
  return (
    <Link href="https://sandbox.sismo.io/misfitwear" isExternal>
      <HStack mt={2}>
        <Image height={8} width={8} src={SismoLogo} alt="Sismo" />
        <Text>Connect your wallet owning Sismo attestations</Text>
      </HStack>
    </Link>
  );
};

export default SismoBanner;

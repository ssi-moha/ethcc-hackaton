import { Box, SimpleGrid } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";
import { ShopCard } from "../components/ShopCard";
import useGetAppProducts from "../hooks/useGetAppProducts";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

export const Marketplace = () => {
  const products = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");
  const { isConnected } = useAccount();
  
  return (
    <Box id="main">
      <ReactCanvasConfetti fire={isConnected} className="canvas" />
      <Box padding="100px">
        <SimpleGrid columns={4} spacingX="0" spacingY="50px">
          {products.map(({ image, name, discount, price }) => (
            <ShopCard
              srcItem={image}
              title={name}
              discount={discount}
              price={price}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

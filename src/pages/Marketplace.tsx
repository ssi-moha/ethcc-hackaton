import { Box, SimpleGrid } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { ShopCard } from "../components/ShopCard";
import useGetAppProducts from "../hooks/useGetAppProducts";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

export const Marketplace = () => {
  const { fire } = useUpdateThemeOnConnection();
  const products = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");

  return (
    <Box id="main">
      <ReactCanvasConfetti fire={fire} className="canvas" />
      <Box padding="100px">
        <SimpleGrid columns={4} spacingX="0" spacingY="50px">
          {products.map((product) => {
            return (
              <ShopCard
                srcItem={product.image}
                title={product.name}
                discount={product.discount}
                price={product.price}
              />
            );
          })}
        </SimpleGrid>
        <></>
      </Box>
    </Box>
  );
};

import { Box, SimpleGrid } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";
import { ShopCard } from "../components/ShopCard";
import useGetAppProducts from "../hooks/useGetAppProducts";
import { useAppSelector } from "../store/store";

export const Marketplace = () => {
  const products = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");
  const { isConnected } = useAccount();
  const nfts = useAppSelector((state) => state.nfts);
  const collections = nfts.map((nft) => nft.contract.address);

  const basicProducts = products.filter((product) => !product.curation);

  console.log(basicProducts);

  const specialProducts = products.filter((product) =>
    collections.includes(product.curation.toLowerCase())
  );

  const productsToShow = [...basicProducts, ...specialProducts];

  return (
    <Box id="main">
      <ReactCanvasConfetti fire={isConnected} className="canvas" />
      <Box padding="100px">
        <SimpleGrid columns={4} spacingX="0" spacingY="50px">
          {productsToShow.map(({ image, name, discount, price }) => {
            return (
              <ShopCard
                srcItem={image}
                title={name}
                discount={discount}
                price={price}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

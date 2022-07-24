import { Box, SimpleGrid } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";
import { ShopCard } from "../components/ShopCard";
import useGetAppProducts from "../hooks/useGetAppProducts";
import { useAppSelector } from "../store/store";

export const Marketplace = () => {
  const {app, refresh} = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");
  const { isConnected } = useAccount();
  const nfts = useAppSelector((state) => state.nfts);
  const collections = nfts.map((nft) => nft.contract.address);

  if (!app) {
    return <div>Loading...</div>;
  }

  const isAnHolder = app.products.some((product) =>
    collections.includes(product.curation.toLowerCase())
  );

  return (
    <Box id="main">
      <ReactCanvasConfetti fire={isConnected} className="canvas" />
      <Box padding="100px">
        <SimpleGrid columns={4} spacingX="0" spacingY="50px">
          {app.products.map(
            ({ image, name, discount, price, collection, curation }) => {
              const isTransparent =
                curation && !collections.includes(curation.toLowerCase());

              return (
                <ShopCard
                  key={`products-${name}`}
                  srcItem={image}
                  title={name}
                  discount={isAnHolder && discount ? discount : undefined}
                  price={price}
                  collection={collection}
                  isTransparent={isTransparent || false}
                  isEligible={curation && isAnHolder}
                />
              );
            }
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

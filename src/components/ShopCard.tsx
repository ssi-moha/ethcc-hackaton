import { Box, Text, Button, Image } from "@chakra-ui/react";
import addButton from "../assets/add-button.png";

interface ShopCardProps {
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
}

export const ShopCard = ({
  srcItem,
  title,
  discount,
  price,
}: ShopCardProps) => {
  const princeNumber = parseInt(price);
  const discountNumber = discount ? parseInt(discount) : 0;

  const promoPercent = discount ? discountNumber / 100 : 0;
  const priceReduced = discount
    ? princeNumber - princeNumber * promoPercent
    : 0;

  return (
    <Box border="1px gray solid" width="200px" borderRadius="10px">
      <Box padding="8px">
        <Image height="200px" width="100%" borderRadius="10px" src={srcItem} />
        <Text
          fontWeight="bold"
          fontSize="12px"
          color="black"
          marginTop="4px"
          padding="2px"
        >
          {title}
        </Text>
        <Box
          border="1px gray solid"
          width={discount ? "50px" : "100%"}
          borderRadius="10px"
          padding="2px"
          marginTop="4px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {discount ? (
            <Text fontWeight="bold" fontSize="12px" color="black" padding="2px">
              {`-${discount}%`}
            </Text>
          ) : (
            <Text fontWeight="bold" fontSize="12px" color="black" padding="2px">
              Connect for Advantages
            </Text>
          )}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          marginTop="8px"
        >
          <Box display="flex">
            <Text
              fontWeight="bold"
              fontSize="14px"
              color="black"
              padding="2px"
              textDecoration={discount ? "line-through" : "none"}
              marginRight={discount ? "2px" : "none"}
            >
              {`${price}$`}
            </Text>
            {discount && (
              <Text
                fontWeight="bold"
                fontSize="14px"
                color="red.500"
                padding="2px"
              >
                {`${priceReduced}$`}
              </Text>
            )}
          </Box>
          <Button height="30px" width="70px" borderRadius="10px" padding="2px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                fontWeight="bold"
                fontSize="14px"
                color="black"
                marginRight="4px"
              >
                Buy
              </Text>
              <Image
                height="20px"
                width="20px"
                borderRadius="10px"
                src={addButton}
              />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

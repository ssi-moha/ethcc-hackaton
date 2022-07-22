import { Box } from "@chakra-ui/react";

type BannerProps = {};

export const Banner = ({}: BannerProps) => {
  return (
    <Box
      sx={{
        height: 1,
        backgroundImage: "linear-gradient(to right, #0987A0, #805AD5);",
      }}
    />
  );
};

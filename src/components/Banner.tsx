import { Box, color, useTheme } from "@chakra-ui/react";

type BannerProps = {};

export const Banner = ({}: BannerProps) => {
  const theme = useTheme();
  return (
    <Box
      height={1}
      bgGradient="linear(to-r, bannerLeft, bannerRight)"
    />
  );
};

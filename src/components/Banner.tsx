import { Box, color, useTheme } from "@chakra-ui/react";

type BannerProps = {};

export const Banner = ({}: BannerProps) => (
  <Box height={1} bgGradient="linear(to-r, bannerLeft, bannerRight)" />
);

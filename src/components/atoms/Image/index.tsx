import { Box } from "@mui/material";
import React from "react";

interface ImageProps {
  url: string;
  name: string;
  height?: string;
  width?: string;
  color?: string;
  bgcolor?: string;
}

export const Image: React.FC<ImageProps> = ({
  url,
  name,
  height,
  width,
  color,
  bgcolor,
}) => {
  return (
    <Box sx={{ color: color }}>
      <img src={url} alt={name} height={height} width={width} />
    </Box>
  );
};

export default Image;

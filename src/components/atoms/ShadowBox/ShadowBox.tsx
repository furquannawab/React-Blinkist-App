import { Box } from "@mui/material";
import React from "react";

interface Props {
  explore: boolean;
}

const ShadowBox: React.FC<Props> = ({ explore }) => {
  return (
    <>
      {explore && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 1,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        ></Box>
      )}
    </>
  );
};

export default ShadowBox;

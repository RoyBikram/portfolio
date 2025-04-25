import { Box, SxProps } from "@mui/material";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ExpandingBoxProps {
  children: ReactNode;
  sx?: SxProps;
}
const ExpandingBox = ({ children, sx }: ExpandingBoxProps) => {
  return (
    <Box sx={{ position: "relative", ...sx }}>
      {children}
      <motion.div
        style={{
          backgroundColor: "#752EFC",
          position: "absolute",
          top: "53px",
          bottom: 0,
          left: 0,
          width: 0,
          zIndex: "-1",
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          damping: 15,
          type: "spring",
          stiffness: 100,
        }}
      ></motion.div>
    </Box>
  );
};

export default ExpandingBox;

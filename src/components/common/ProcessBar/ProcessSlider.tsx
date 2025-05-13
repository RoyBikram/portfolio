import { Box } from "@mui/material";

const ProcessSlider = () => {
  return (
    <Box
      sx={{
        width: "calc(100% - 20px)",
        height: "7px",
        backgroundColor: "primary.main",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%) translateX(10px)",
        zIndex: -1,
      }}
    />
  );
};

export default ProcessSlider;

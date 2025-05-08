import { Box, SxProps, Typography } from "@mui/material";

interface HeadingProps {
  label: string;
  sx?: SxProps;
}

const Heading = ({ label, sx }: HeadingProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        ...sx,
      }}
    >
      <Typography
        sx={{
          color: "text.background",
          fontSize: "90px",
          fontWeight: "500",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant='title'
        sx={{
          position: "absolute",
          zIndex: "2",
          transform: "translateY(23%)",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default Heading;

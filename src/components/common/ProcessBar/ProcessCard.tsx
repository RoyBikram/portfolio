import { Box, Typography } from "@mui/material";

interface ProcessCardProps {
  title: string;
  description: string;
  serialNumber: number;
}

const ProcessCard = ({
  title,
  description,
  serialNumber,
}: ProcessCardProps) => {
  const isOdd = (number: number): boolean => {
    return number % 2 === 0;
  };

  return (
    <Box
      sx={{
        height: "26px",
        width: "26px",
        border: "2px solid #fff",
        borderRadius: "50%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "10px",
          width: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          height: "300px",
          width: "320px",
          ...(!isOdd(serialNumber) && { bottom: "22px" }),
          ...(isOdd(serialNumber) && { top: "22px" }),
          left: "10px",
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "3px",
            backgroundColor: "rgb(81 81 81)",
            borderRadius: "2px",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />

        <Box
          sx={{
            width: "320px",
            height: "210px",
            backgroundColor: "rgba(45, 45, 45, 0.5)",
            position: "absolute",
            ...(isOdd(serialNumber) && { bottom: "0" }),
            ...(!isOdd(serialNumber) && { top: "0" }),
            borderRadius: "0px 10px 10px 0px",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            zIndex: -3,
          }}
        >
          <Typography variant='subtitle' sx={{ color: "white" }}>
            {title}
          </Typography>
          <Typography
            variant='body'
            sx={{ mt: "6px", color: "text.secondary", fontWeight: "400" }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontSize: "140px",
              lineHeight: "140px",
              position: "absolute",
              top: "11%",
              right: "5%",
              color: "rgb(48, 48, 48)",
              zIndex: -1,
              fontWeight: "600",
            }}
          >
            {`${serialNumber}`.padStart(2, "0")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessCard;

import Terminal from "@/assets/services/terminal.svg";
import { Box, BoxProps, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../Button";
interface ServiceCardProps extends BoxProps {
  title: string;
  description: string;
  link: string;
  titleColor?: string;
  sx?: SxProps;
}
const ServiceCard = ({
  title,
  description,
  link,
  titleColor,
  sx,
  ...props
}: ServiceCardProps) => {
  return (
    <Box
      sx={{
        backdropFilter: "blur(12px) saturate(200%)",
        WebkitBackdropFilter: "blur(12px) saturate(200%)",
        backgroundColor: "text.background",
        borderRadius: "12px",
        border: "3px solid rgba(255, 255, 255, 0.125)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
        padding: "20px",
        height: "fit-content",
        ...sx,
      }}
      {...props}
    >
      <Typography variant='subtitle' sx={{ color: titleColor }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Image src={Terminal} alt='Terminal' />
        <Typography variant='body'>{description}</Typography>
      </Box>
      <Button variant='secondary'>Hire now</Button>
    </Box>
  );
};

export default ServiceCard;

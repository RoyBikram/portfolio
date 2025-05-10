import Main from "@/assets/skillpage/main.svg";
import ReactImage from "@/assets/skillpage/react.png";
import Heading from "@/components/common/Heading";
import { TechCards } from "@/components/common/TechCards";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Tech = () => {
  const items = [
    {
      id: 1,
      name: "React",
      description:
        "A JavaScript library for building user interfaces A JavaScript library for building user interfaces A JavaScript library for building user interfaces",
      image: ReactImage,
      color: "#61DAFB",
    },
    {
      id: 1,
      name: "React",
      description: "A JavaScript library for building user interfaces",
      image: ReactImage,
      color: "#61DAFB",
    },
    {
      id: 1,
      name: "React",
      description: "A JavaScript library for building user interfaces",
      image: ReactImage,
      color: "#61DAFB",
    },
    {
      id: 1,
      name: "React",
      description: "A JavaScript library for building user interfaces",
      image: ReactImage,
      color: "#61DAFB",
    },
    {
      id: 1,
      name: "React",
      description: "A JavaScript library for building user interfaces",
      image: ReactImage,
      color: "#61DAFB",
    },
  ];
  return (
    <Box>
      <Heading label='Technologies' />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "900px",
          maxWidth: "1200px",
          mx: "auto",
          my: "100px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant='title'>
            Here are the tools used <br /> to craft your dream
          </Typography>
          <Box sx={{ mt: "20px", width: "fit-content", display: "flex" }}>
            <TechCards items={items} />
          </Box>
        </Box>
        <Box>
          <Image src={Main} height={330} alt='main' />
        </Box>
      </Box>
    </Box>
  );
};

export default Tech;

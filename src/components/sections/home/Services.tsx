import MainImg from "@/assets/services/main.svg";
import Heading from "@/components/common/Heading";
import ServiceCard from "@/components/common/Services/ServiceCard";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Services = () => {
  return (
    <Box>
      <Heading label='Services' />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1250px",
          minWidth: "900px",
          mx: "auto",
          my: "100px",
        }}
      >
        <Box
          sx={{
            maxWidth: "460px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "35%",
          }}
        >
          <Typography variant='title'>
            My most loved services by the people.
          </Typography>

          <Image src={MainImg} alt='portfolio' height={300} />
        </Box>
        <Box
          sx={{
            // maxWidth: "460px",
            display: "grid",
            gridTemplateAreas: '"first second" "first third"',
            gap: "20px",
          }}
        >
          <ServiceCard
            title='Web Development'
            description='I can develop a website for your business or personal use. I can develop a website for your business or personal use.'
            link='/services/web-development'
            sx={{
              width: "345px",
              gridArea: "first",
              alignSelf: "center",
            }}
          />
          <ServiceCard
            title='Web Development'
            description='I can develop a website for your business or personal use. I can develop a website for your business or personal use.'
            link='/services/web-development'
            sx={{
              width: "410px",
              gridArea: "second",
            }}
          />
          <ServiceCard
            title='Web Development'
            description='I can develop a website for your business or personal use. I can develop a website for your business or personal use.'
            link='/services/web-development'
            sx={{
              width: "350px",
              gridArea: "third",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;

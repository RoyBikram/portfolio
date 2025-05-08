"use client";

import aboutImage from "@/assets/about_img.jpg";
import Button from "@/components/common/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <Box
      component='section'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        width: "100%",
        padding: "100px 0",
      }}
    >
      <Typography variant='title'>Who am i?</Typography>
      <Box
        sx={{
          borderRadius: "50%",
          border: "4px solid",
          borderColor: "primary.main",
          boxShadow: (theme) =>
            `0px 0px 25px 0px ${theme.palette.primary.main}`,
          width: "fit-content",
          lineHeight: 0,
        }}
      >
        <Image
          src={aboutImage}
          alt='about'
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        <Typography variant='body'>
          I am Bikram. I always like to create something on my own which is
          helpful for others. Because of that, I was exploring different stuff,
          at least I find out web development and designing and it becomes my
          passion of life. Now I have converted it into my profession. Let me
          use my unique experiences to help your brand stand out!
        </Typography>
        <Button sx={{ alignSelf: "flex-start" }}>Contact Me</Button>
      </Box>
    </Box>
  );
};

export default About;

"use client";
import Heading from "@/components/common/Heading";
import { Box, Typography } from "@mui/material";

import image1 from "@/assets/portfolio/e-commerce.jpg";
import folderImg from "@/assets/portfolio/folder_img.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import Button from "@/components/common/Button";
import PortfolioItem from "@/interface/PortfolioItem";
import Image from "next/image";
import { EffectCards } from "swiper/modules";

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      name: "Concept Landing Page for A Headphone Brand",
      image: "@/assets/portfolio/e-commerce.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus iste fugiat debitis expedita vel maxime, unde dolorem voluptate magnam, obcaecati nulla voluptatem aliquam sit! Illo earum vitae error ea?",
      tags: ["Landing Page", "E-commerce", "Headphone Brand"],
      link: "https://www.google.com",
    },
    {
      name: "Concept Landing Page for A ",
      image: "@/assets/portfolio/e-commerce.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus iste fugiat debitis expedita vel maxime,",
      tags: ["Landing Page", "E-commerce", "Headphone Brand"],
      link: "https://www.google.com",
    },
    {
      name: "Concept Landing Page for A Headphone Brand",
      image: "@/assets/portfolio/e-commerce.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus iste fugiat debitis expedita vel maxime, unde dolorem voluptate magnam, obcaecati nulla voluptatem aliquam sit! Illo earum vitae error ea?",
      tags: ["Landing Page", "E-commerce", "Headphone Brand"],
      link: "https://www.google.com",
    },
    {
      name: "Concept Landing Page for A Headphone Brand",
      image: "@/assets/portfolio/e-commerce.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus iste fugiat debitis expedita vel maxime, unde dolorem voluptate magnam, obcaecati nulla voluptatem aliquam sit! Illo earum vitae error ea?",
      tags: ["Landing Page", "E-commerce", "Headphone Brand"],
      link: "https://www.google.com",
    },
    {
      name: "Concept Landing Page for A Headphone Brand",
      image: "@/assets/portfolio/e-commerce.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus iste fugiat debitis expedita vel maxime, unde dolorem voluptate magnam, obcaecati nulla voluptatem aliquam sit! Illo earum vitae error ea?",
      tags: ["Landing Page", "E-commerce", "Headphone Brand"],
      link: "https://www.google.com",
    },
  ];
  return (
    <Box>
      <Heading label='Portfolio' />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "1200px",
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
          }}
        >
          <Image src={folderImg} alt='portfolio' height={120} />
          <Typography variant='title'>
            Here, some of my project you might love. Just take a look.
          </Typography>
          <Typography variant='body'>
            These are some of my selective projects. You can get a brief idea
            about my work. If you have convinced then you can start a new
            project by clicking the button below.
          </Typography>
          <Button sx={{ my: "20px" }}>Start Your Project</Button>
        </Box>
        <Box sx={{ maxWidth: "460px" }}>
          <Swiper
            style={{
              width: "300px",
              height: "450px",
            }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className='mySwiper'
          >
            {portfolioItems.map((item) => (
              <SwiperSlide>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "rgb(50, 50, 50)",
                    borderRadius: "10px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={image1}
                    alt={item.name}
                    style={{ borderRadius: "8px" }}
                  />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", flex: "1" }}
                  >
                    <Typography
                      variant='titleSmall'
                      sx={{
                        display: "block",
                        mt: "8px",
                        p: "4px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant='bodySmall'
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        ml: "5px",
                        mt: "2px",
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Button
                      sx={{ fontSize: "14px", mt: "auto", ml: "2px" }}
                      variant='secondary'
                    >
                      More
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;

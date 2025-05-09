"use client";

import handIcon from "@/assets/helloHand.png";
import HomeImage from "@/assets/heroImage.svg";
import ExpandingBox from "@/components/animation/ExpandingBox";
import Button from "@/components/common/Button";
import { ExpandableMessageSend } from "@/components/ui/expandable-card";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";
import { Box, colors, keyframes, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  const scroller = keyframes`
  0% {
    bottom: 34px;
  }
  5% {
    top: 4px;
  }
  32% {
    bottom: 4px;
  }
  66% {
    top: 34px;
    bottom: 4px;
  }
  100% {
    top: 4px;
    bottom: 34px;
  }
`;

  return (
    <Box sx={{ display: "grid", placeItems: "center", textAlign: "center" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 12,
        }}
      >
        <Typography sx={{ fontSize: "62px", fontWeight: "500" }}>
          {/* Your Billion Dollar Idea Should Deserve */}
          Let's Craft Your Web App Idea Into
        </Typography>

        <ExpandingBox sx={{ px: 3, width: "fit-content" }}>
          <Typography sx={{ fontSize: "62px", fontWeight: "500" }}>
            {/* A Quality Execution */}A Online Masterpiece
          </Typography>
        </ExpandingBox>

        <Typography
          sx={{
            mt: 5,
            maxWidth: "700px",
            fontSize: "20px",
            color: colors.grey[400],
          }}
        >
          That's exactly what I do. I transform your ideas into highly scalable
          and future-proof web masterpieces. Then, what are you waiting for?
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
          <Button>
            <Typography sx={{ whiteSpace: "nowrap" }}>Let's Meet</Typography>
            <VideocamTwoToneIcon
              sx={{
                ml: 1,
              }}
            />
          </Button>
          <Typography
            sx={{
              WebkitTextStroke: `2px #313131`,
              fontSize: "60px",
              lineHeight: "60px",
              color: "#1F1F1F",
              fontFamily: "ubuntu",
              fontWeight: "500",
              ml: "10px",
            }}
          >
            or
          </Typography>
          <ExpandableMessageSend />
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            bottom: "-95px",
          }}
        >
          <Box
            sx={{
              width: "30px",
              height: "60px",
              border: "3px solid rgb(82, 82, 82)",
              borderRadius: "15px",
              position: "relative",
              marginLeft: "auto",
              marginRight: "auto",
              transform: "translateY(-100%) scale(-0.6) rotate(180deg)",
            }}
          >
            <Box
              sx={{
                width: "16px",
                borderRadius: "8px",
                backgroundColor: "#3281ff",
                position: "absolute",
                top: "4px",
                left: "4px",
                bottom: "34px",
                animation: `${scroller} 1500ms ease-out infinite`,
              }}
            ></Box>
          </Box>
        </Box>
        <Image
          src={HomeImage}
          alt='Hero image'
          width='600'
          style={{ marginTop: "30px" }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            width: "fit-content",
            zIndex: 10,
            background: "linear-gradient(158deg, #191919, #212121)",
            boxShadow: "20px 20px 60px rgb(0, 0, 0), -20px -20px 60px #2c2c2c",
            height: "fit-content",
            borderRadius: "15px",
            alignItems: "center",
            top: "25px",
            left: "-197px",
            padding: "12px 20px",
            borderRight: "3px solid #181818",
            borderBottom: "3px solid #181818",
          }}
        >
          <Image
            src={handIcon}
            alt='Hand icon'
            height='45'
            style={{ transform: "rotate(332deg)" }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              textAlign: "left",
              gap: "3px",
              ml: "10px",
            }}
          >
            <Typography
              sx={{
                lineHeight: "18px",
                ml: "2px",
                fontSize: "16px",
                color: colors.grey[400],
              }}
            >
              Hi, i am
            </Typography>
            <Typography
              sx={{
                lineHeight: "32px",
                fontSize: "27px",
                color: "white",
              }}
            >
              Bikram
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

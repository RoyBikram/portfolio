import Heading from "@/components/common/Heading";
import ProcessBar from "@/components/common/ProcessBar";
import { Box, Typography } from "@mui/material";

const Progress = () => {
  const items = [
    {
      title: "Discurtion",
      description:
        "We discourse all of your needs and finalised the price and time period.",
    },
    {
      title: "Research",
      description:
        "Understand your target customer and your business model by doing some research.",
    },
    {
      title: "Prototype",
      description:
        "Delivered an initial prototype keep in mind all of your needs.",
    },
    {
      title: "Revition",
      description:
        "Make changes according to your opinion until you satisfy and fulfil your needs.",
    },
    {
      title: "Finish Product",
      description:
        "Clean, organize the project with some final touches and make it efficient.",
    },
    {
      title: "Payment",
      description:
        "You pay my fees as decided and also if you like to give some tips it is very appreciable.",
    },
    {
      title: "Delivery",
      description:
        "Now I delivered your product as your need as soon as possible.",
    },
  ];
  return (
    <Box>
      <Heading label='Progress' />
      <Typography
        variant='subtitle'
        sx={{ mx: "auto", textAlign: "center", display: "block" }}
      >
        I like Transparency. So here is my WorkFlow.
      </Typography>
      <ProcessBar maxWidth='1500px' items={items} />
    </Box>
  );
};

export default Progress;

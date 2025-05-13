import { Box } from "@mui/material";
import ProcessCard from "./ProcessCard";
import ProcessSlider from "./ProcessSlider";

interface ProcessBarProps {
  maxWidth: string;
  items: {
    title: string;
    description: string;
  }[];
}

const ProcessBar = ({ maxWidth, items }: ProcessBarProps) => {
  return (
    <Box
      sx={{
        padding: "50px",
        position: "relative",
        width: "100%",
        maxWidth: maxWidth,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: "calc(100% - 320px)",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          justifyContent: "space-between",
          my: "320px",
        }}
      >
        {items.map((item, index) => (
          <ProcessCard
            key={index}
            title={item.title}
            description={item.description}
            serialNumber={index + 1}
          />
        ))}

        <ProcessSlider />
      </Box>
    </Box>
  );
};

export default ProcessBar;

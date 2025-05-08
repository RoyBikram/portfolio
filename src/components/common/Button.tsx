import {
  Box,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
} from "@mui/material";
import { ReactNode } from "react";
import BackgroundGradient from "../ui/background-gradient";

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  colors?: string[];
  sx?: SxProps;
}

const Button = ({ children, sx, ...props }: ButtonProps) => {
  return (
    <Box sx={{ ...sx }}>
      <BackgroundGradient className='rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 overflow-hidden w-fit'>
        <MuiButton
          sx={{
            textTransform: "capitalize",
            color: "white",
            fontSize: "16px",
            fontWeight: "400",
            px: "25px",
            py: "12px",
            lineHeight: "24px",
          }}
          {...props}
        >
          {children}
        </MuiButton>
      </BackgroundGradient>
    </Box>
  );
};

export default Button;

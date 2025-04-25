import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { ReactNode } from "react";
import BackgroundGradient from "../ui/background-gradient";

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  colors?: string[];
}

const Button = ({ children }: ButtonProps) => {
  return (
    <BackgroundGradient className='rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 overflow-hidden'>
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
      >
        {children}
      </MuiButton>
    </BackgroundGradient>
  );
};

export default Button;

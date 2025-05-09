import {
  Box,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
} from "@mui/material";
import { ReactNode } from "react";
import BackgroundGradient from "../ui/background-gradient";

interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  colors?: string[];
  sx?: SxProps;
}

const Button = ({
  children,
  sx,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <Box sx={{ ...sx }}>
      <BackgroundGradient
        className={`rounded-[22px] max-w-sm bg-[#2d2d2d] dark:bg-[#2d2d2d] overflow-hidden w-fit `}
        containerClassName={`${variant === "primary" ? "p-[3px]" : "p-[2px]"}`}
      >
        <MuiButton
          sx={{
            textTransform: "capitalize",
            color: "white",
            fontSize: variant === "primary" ? "16px" : "14px",
            fontWeight: "400",
            px: variant === "primary" ? "25px" : "8px",
            py: variant === "primary" ? "12px" : "6px",
            lineHeight: variant === "primary" ? "24px" : "16px",
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

"use client";
import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/typography" {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    title: true;
  }
}
const theme = createTheme({
  typography: {
    fontFamily: "var(--font-poppins)",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: {
                variant: "title",
              },
              style: {
                fontSize: "36px",
                color: "white",
              },
            },
            {
              props: {
                variant: "subtitle",
              },
              style: {
                fontSize: "20px",
                color: colors.grey[400],
              },
            },
          ],
        },
      },
    },
  },
  cssVariables: true,
});

export default theme;

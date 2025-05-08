"use client";
import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    title: true;
    body: true;
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#752EFC",
    },
    text: {
      primary: "white",
      secondary: colors.grey[400],
    },
  },
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
            {
              props: {
                variant: "body",
              },
              style: {
                fontSize: "16px",
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

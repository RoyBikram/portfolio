"use client";
import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    title: true;
    body: true;
    subtitleSmall: true;
    titleSmall: true;
    bodySmall: true;
  }
}

declare module "@mui/material/styles" {
  interface TypeText {
    background: string;
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
      background: "#282828",
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
                lineHeight: "46px",
              },
            },
            {
              props: {
                variant: "subtitle",
              },
              style: {
                fontSize: "25px",
                color: "white",
                lineHeight: "30px",
              },
            },
            {
              props: {
                variant: "body",
              },
              style: {
                fontSize: "18px",
                color: colors.grey[400],
              },
            },
            {
              props: {
                variant: "titleSmall",
              },
              style: {
                fontSize: "16px",
                color: "white",
              },
            },

            {
              props: {
                variant: "bodySmall",
              },
              style: {
                fontSize: "14px",
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

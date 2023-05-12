import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "subtitle2",
          },
          style: {
            fontSize: 15,
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});

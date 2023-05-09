import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";

const CharactersCards = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={5}>
        <img
          src="https://w7.pngwing.com/pngs/396/63/png-transparent-rick-morty-illustration-rick-sanchez-morty-smith-rick-and-morty-season-3-television-show-adult-swim-rick-and-morty-television-child-face.png"
          alt="img"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Name character
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 Hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={2.5}>
            <Rating
              name="read-only"
              value={3.5}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="subtitle2" component="p" marginLeft={0.5}>
              3.5
            </Typography>
            <Typography variant="caption" component="p" marginLeft={0.5}>
              (650 reviews)
            </Typography>
          </Box>

          <Box>
            {" "}
            <Typography variant="h6" component="p" marginTop={0}>
              $ 3.000
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CharactersCards;

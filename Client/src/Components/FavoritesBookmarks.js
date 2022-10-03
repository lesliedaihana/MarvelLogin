import React from "react";
import Grid from "@mui/material/Grid";
import HeaderComics from "./Comics/HeaderComics";

const FavoritesBookmarks = () => {
  return (
    <Grid container sx={{ backgroundColor: "white", height: "100vh" }}>
      <HeaderComics />
    </Grid>
  );
};

export default FavoritesBookmarks;

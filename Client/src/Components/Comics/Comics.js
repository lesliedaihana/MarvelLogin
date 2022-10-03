import { Grid } from "@mui/material";
import HeaderComics from "./HeaderComics";
import CardsComic from "./CardsComic";

const Comics = () => {
  return (
    <Grid container sx={{ backgroundColor: "white", height: "100vh" }}>
      <HeaderComics />
      <CardsComic />
    </Grid>
  );
};

export default Comics;

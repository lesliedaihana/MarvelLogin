import { Grid, Button } from "@mui/material";
import { IoEnterSharp } from "react-icons/io5";

const Navbar = ({ setStateLogin }) => {
  return (
    <Grid
      item
      lg={12}
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Button
        variant="contained"
        startIcon={<IoEnterSharp />}
        sx={{
          textTransform: "none",
        }}
        onClick={() => setStateLogin((value) => !value)}
      >
        Ingresar
      </Button>
    </Grid>
  );
};

export default Navbar;

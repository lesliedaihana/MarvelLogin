import { useState } from "react";

import { Grid, Typography } from "@mui/material";

import Register from "./Register";
import Navbar from "./Navbar/Navbar";
import Login from "./Login";

const Header = () => {
  const [stateLogin, setStateLogin] = useState(false);
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundImage: `url("/bg.jpg")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        padding: "50px 120px ",
      }}
    >
      <Navbar setStateLogin={setStateLogin} />
      <Grid
        item
        lg={12}
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Grid item lg={4}>
          <Typography variant="h1" sx={{ color: "white" }}>
            Marvel Comics
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            Tony Stark se agita con el Poder Cósmico: ¡el Hombre de Hierro ahora
            es el DIOS DE HIERRO! Pero a pesar de sus mejores intenciones, ¿es
            esto realmente algo bueno para la Tierra y el universo? Patsy
            Walker, alias HELLCAT, realmente no lo cree así... razón por la cual
            se ha ido a la quiebra y solicitó la ayuda de un DOCTOR DOOM. Pero
            si hay alguien que puede hacer enojar a Tony, es Victor... ¿Qué
            sucede cuando un Stark con poder cósmico se siente traicionado por
            el latveriano más arrogante del mundo? Probablemente, nada menos que
            una devastación total.
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "end",
          }}
        >
          <Register />
        </Grid>
      </Grid>
      {stateLogin && <Login setStateLogin={setStateLogin} />}
    </Grid>
  );
};

export default Header;

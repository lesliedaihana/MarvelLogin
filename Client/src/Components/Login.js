import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "./ContextUser";

import useModal from "./CustomHooks/useModal";

import { Grid, Checkbox, Button, Typography, TextField } from "@mui/material";

const Login = ({ setStateLogin }) => {
  const navigate = useNavigate();
  const [stateChecked, setStateChecked] = useState(false);

  const [stateForm, setStateForm] = useState({
    email: "",
    password: "",
  });

  const {  setUser } = useContext(UserContext);

  const { UseModal, setStateModal } = useModal();

  const { email, password } = stateForm;

  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const handleChange = (e) => {
    setStateForm({
      ...stateForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(stateForm).every((value) => value !== "")) {
      return setStateModal({
        text: "Todos los campos son requeridos",
        error: true,
        showmodal: true,
      });
    }

    if (!emailRegex.test(email)) {
      return setStateModal({
        text: "Porfavor ingrese un correo valido",
        error: true,
        showmodal: true,
      });
    }

    await axios("http://localhost:4000/user/signin", {
      method: "post",
      data: stateForm,
      headers: { "Content-Type": "application/json" },
      responseType: "json",
    })
      .then((response) => {
        setStateForm({
          email: "",
          password: "",
        });
        setUser(response.data);
        setStateModal({
          text: `Bienvenido Sr@ ${response.data.username}`,
          error: false,
          showmodal: true,
        });
        setTimeout(() => {
          navigate("marvelcomics");
        }, 3000);
      })
      .catch((error) => {
        alert(`${error.response.data.message}`);
      });
  };
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0px",
        left: "0px",
        rigth: "0px",
        bottom: "0px",
        backgroundColor: "#2b2b2be3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <form
        style={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          gap: "12px",
          padding: "25px",
          borderRadius: "4px",
          zIndex: "100",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h1" color="initial" sx={{ fontSize: "30px" }}>
          Ingresar
        </Typography>
        <TextField
          label="Correo"
          variant="outlined"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="initial">
            Recordarme
          </Typography>
          <Checkbox
            checked={stateChecked}
            onClick={() => {
              setStateChecked(!stateChecked);
            }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ textTransform: "none", alignSelf: "end" }}
        >
          Enviar
        </Button>
        <UseModal />
      </form>
    </Grid>
  );
};

export default Login;

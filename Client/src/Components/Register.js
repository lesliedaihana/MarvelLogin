import { useState } from "react";
import axios from "axios";

import { TextField, Button, Typography } from "@mui/material";

import useModal from "./CustomHooks/useModal";

const Register = () => {
  const [stateForm, setStateForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { UseModal, setStateModal } = useModal();

  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const { username, email, password, confirmpassword } = stateForm;

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

    if (password !== confirmpassword) {
      return setStateModal({
        text: "Las contraseñas no corresponden",
        error: true,
        showmodal: true,
      });
    }

    try {
      const response = await axios("http://localhost:4000/user/signup", {
        method: "post",
        data: {
          username,
          email,
          password,
        },
        headers: { "Content-Type": "application/json" },
        responseType: "json",
      });

      setStateForm({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });

      const { error, message } = response.data;

      return setStateModal({
        text: message,
        error: error,
        showmodal: true,
      });
    } catch (error) {
      setStateForm({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      
      return setStateModal({
        text: error.response.data.message,
        error: true,
        showmodal: true,
      });
    }
  };

  return (
    <form
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        gap: "12px",
        padding: "25px",
        borderRadius: "4px",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h1" sx={{ color: "#2b2b2b", fontSize: "30px" }}>
        Registrarse
      </Typography>
      <TextField
        label="Nombre"
        variant="outlined"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <TextField
        label="Correo"
        variant="outlined"
        type="email"
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
      <TextField
        label="Confirmar Contraseña"
        variant="outlined"
        type="password"
        name="confirmpassword"
        value={confirmpassword}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{
          alignSelf: "end",
          textTransform: "none",
        }}
      >
        Enviar
      </Button>
      <UseModal />
    </form>
  );
};

export default Register;

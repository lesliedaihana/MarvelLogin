import { useNavigate } from "react-router-dom";

import { IconButton } from "@mui/material";
import { BsPersonCircle, BsBookmarks } from "react-icons/bs";

const HeaderComics = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#121212",
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 25px",
        zIndex: "100",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "100%",
        }}
        src="https://www.freepnglogos.com/uploads/marvel-logo-png/new-marvel-studios-logo-debuted-marvelstudios-3.png"
        alt="Logo Marvel"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <IconButton
          onClick={() => {navigate("/favoritos")}}
          sx={{ color: "#fd2e3e", fontSize: "20px" }}
        >
          <BsBookmarks />
        </IconButton>
        <IconButton sx={{ color: "#fd2e3e", fontSize: "20px" }}>
          <BsPersonCircle />
        </IconButton>
      </div>
    </div>
  );
};

export default HeaderComics;

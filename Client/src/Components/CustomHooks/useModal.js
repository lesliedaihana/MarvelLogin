import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const useModal = () => {
  const [stateModal, setStateModal] = useState({
    error: false,
    text: "",
    showmodal: false,
  });

  const { error, text, showmodal } = stateModal;

  useEffect(() => {
    if (!showmodal) return;

    setTimeout(() => {
      setStateModal({ error: false, text: "", showmodal: false });
    }, 3000);
  }, [stateModal, showmodal]);

  const UseModal = () =>
    showmodal && (
      <div
        style={{
          backgroundColor: error ? "#fd2e3e" : "#11c2ff",
          padding: "8px 0px",
          borderRadius: "4px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "white", textAlign: "center" }}
        >
          {text}
        </Typography>
      </div>
    );

  return { UseModal, setStateModal };
};

export default useModal;

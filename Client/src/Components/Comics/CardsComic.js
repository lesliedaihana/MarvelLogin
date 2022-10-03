import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardsComic = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios("https://gateway.marvel.com:443/v1/public/comics", {
      method: "get",
      params: {
        ts: "1",
        apikey: "0da963c43dc53b0282ce3dfd9b0a6272",
        hash: "ea95bbe4c075e481fc05e107694a6fe3",
        limit: "80",
        orderBy: "issueNumber",
      },
    })
      .then((response) => {
        setCards(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid
      container
      sx={{
        padding: "50px 80px",
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        background: "#000000e3",
      }}
    >
      {cards.map((card) => (
        <ContainerCards
          onClick={() => {
            navigate(`/issue/${card.id}`);
          }}
          item
          lg={1.6}
          key={card.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            transition: "all 0.5s ease-out",
          }}
        >
          <div style={{ width: "100%", height: "300px", marginBottom: "8px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={
                card.images.length > 0
                  ? `${card.images[0].path}.${card.images[0].extension}`
                  : `${card.thumbnail.path}.${card.thumbnail.extension}`
              }
              alt={card.title}
            />
          </div>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: "600", color: "#fff" }}
          >
            {card.title}
          </Typography>
        </ContainerCards>
      ))}
    </Grid>
  );
};

const ContainerCards = styled(Grid)`
  &:hover {
    transform: translateY(-20px);
  }
`;

export default CardsComic;

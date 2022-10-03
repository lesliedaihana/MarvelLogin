import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Grid, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoMdHeart } from "react-icons/io";

import HeaderComics from "./HeaderComics";

const Story = () => {
  const { comicId } = useParams();
  const navigate = useNavigate();
  const [comic, setComic] = useState({});

  useEffect(() => {
    axios(`http://gateway.marvel.com/v1/public/comics/${comicId}`, {
      method: "get",
      params: {
        ts: "1",
        apikey: "0da963c43dc53b0282ce3dfd9b0a6272",
        hash: "ea95bbe4c075e481fc05e107694a6fe3",
      },
    })
      .then((response) => {
        setComic(response.data.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [comicId]);

  return (
    Object.keys(comic).length > 0 && (
      <ContainerStory
        container
        sx={{
          backgroundImage:
            comic.images.length > 0
              ? `url(${comic.images[0].path}.${comic.images[0].extension})`
              : `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,
          backgroundSize: "auto",
          backgroundPosition: "center center",
        }}
      >
        <HeaderComics />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            zIndex: "100",
            padding: "0px 120px",
            gap: "30px",
          }}
        >
          <Grid item lg={3.5}>
            <img
              src={
                comic.images.length > 0
                  ? `${comic.images[0].path}.${comic.images[0].extension}`
                  : `${comic.thumbnail.path}.${comic.thumbnail.extension}`
              }
              alt={comic.id}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item lg={7.5}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{ color: "#fff", fontSize: "35px", marginBottom: "25px" }}
              >
                {comic.title}
              </Typography>
              <IconButton
                sx={{
                  color: "#fd2e3e",
                  fontSize: "25px",
                  border: "2px solid #fd2e3e",
                }}
              >
                <IoMdHeart />
              </IconButton>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "25px",
              }}
            >
              <Typography variant="h1" sx={{ color: "#fff", fontSize: "25px" }}>
                Publicado
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                {new Date(comic.dates[0].date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </div>
            <div
              style={{
                width: "60%",
                display: "flex",
                flexWrap: "wrap",
                gap: "50px",
              }}
            >
              {comic.creators.items.map((creator) => (
                <div key={creator.name}>
                  <Typography
                    variant="h1"
                    sx={{
                      color: "#fff",
                      fontSize: "25px",
                      marginTop: "25px",
                    }}
                  >
                    {`${
                      creator.role.charAt(0).toUpperCase() +
                      creator.role.slice(1)
                    }:`}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fff", fontSize: "14px" }}
                  >
                    {creator.name}
                  </Typography>
                </div>
              ))}
            </div>
            <div style={{ width: "80%", marginTop: "50px" }}>
              <Typography variant="h1" sx={{ color: "#fff", fontSize: "25px" }}>
                Descripcion:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                {comic.description}
              </Typography>
            </div>
            <Button
              onClick={() => {
                navigate("/marvelcomics");
              }}
              variant="contained"
              color="primary"
              sx={{ textTransform: "none", marginTop: "50px" }}
            >
              Volver
            </Button>
          </Grid>
        </div>
      </ContainerStory>
    )
  );
};

const ContainerStory = styled(Grid)`
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

export default Story;

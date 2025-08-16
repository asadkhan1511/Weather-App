import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import "./infoBox.css";

export default function InfoBox({ info }) {
  let HOT_URL =
    "https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1553525553-f373087438be?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={
              info.humidity > 75
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            alt="green iguana"
          />
          <CardContent className="cardBody">
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 75 ? (
                <ThunderstormRoundedIcon />
              ) : info.temp > 15 ? (
                <LightModeRoundedIcon />
              ) : (
                <AcUnitRoundedIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Max Temperature = {info.tempMax}</p>
              <p>Min Temperature = {info.tempMin}</p>
              <p>
                Weather can be described as{" "}
                <i>
                  <b>{info.weather}</b>
                </i>{" "}
                & feels like <i>{info.feels_like}</i> &deg;C
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
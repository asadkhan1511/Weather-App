import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 24.84,
    temp: 25.5,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
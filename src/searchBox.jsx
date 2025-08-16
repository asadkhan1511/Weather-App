import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import "./searchBox.css";

export default function SearchBox({ updateInfo }) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "0a66d9549a14a4798412fef177b9dcde";

  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let getWeatherInfo = async () => {
    try {
      let weatherData = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonData = await weatherData.json();

      let result = {
        city: city,
        temp: jsonData.main.temp,
        tempMin: jsonData.main.temp_min,
        tempMax: jsonData.main.temp_max,
        humidity: jsonData.main.humidity,
        feels_like: jsonData.main.feels_like,
        weather: jsonData.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      setErr(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <h1>
        Weather App! of Asad
      </h1>
      <form onSubmit={handleSubmit} className="searchBox">
        <TextField
          required
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          color="secondary"
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          size="small"
        >
          Search
        </Button>
        {err && (
          <Alert severity="error" className="alert">
            No Such Place Exists
          </Alert>
        )}
      </form>
    </>
  );
}
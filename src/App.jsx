import { useState } from "react";
import "./App.css";
import WeatherApp from "./weatherApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <WeatherApp />
    </div>
  );
}

export default App;
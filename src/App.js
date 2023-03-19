import axios from "axios";
import { useEffect, useState } from "react";
import InputSearch from "./components/InputSearch";

import TextMain from "./components/TextMain";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [searchGo, setSearchGo] = useState(false);
  const [tempToCel, setTempToCel] = useState(false);
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
    },
    name: "",
    weather: [{ main: "" }],
    wind: {
      speed: 0,
    },
  });

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
        )
        .then(({ data }) => {
          setWeatherData(data);
        });
    };
    try {
      if (searchGo === true) {
        getData();
        setSearchGo(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchGo, inputCity]);

  const onSearchButt = () => {
    setSearchGo(true);

    console.log(weatherData);
  };

  const inputChange = (e) => {
    setInputCity(e.target.value);
    e.preventDefault();
  };

  const onClickCelcius = () => {
    setTempToCel(!tempToCel);
  };
  
  return (
    <div className="main_block">
      <div className="weather_main">
        <TextMain text="Simple weather project" />
        <InputSearch inputChange={inputChange} inputCity={inputCity} onSearchButt={onSearchButt} />

        <div className="infoPanel">
          <h3 className="locationCity">Location : {weatherData.name}</h3>

          <div className="weatherStatus">
            <h4>Weather : {weatherData.weather[0].main}</h4>
            {weatherData.weather[0].icon && (
              <img
                src={`https://api.openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weatherIcon"
              />
            )}
          </div>

          <div className="temp">
            <h4>
              Temperature :{" "}
              {Math.round(
                tempToCel ? weatherData.main.temp : (weatherData.main.temp - 32) * (5 / 9)
              )}
              {tempToCel ? " F" : " C"}
            </h4>
            <p className="feelsTemp">
              Feels Like :{" "}
              {tempToCel
                ? `${Math.round(weatherData.main.feels_like)} F`
                : `${Math.round(((weatherData.main.feels_like - 32) * 5) / 9)} C`}
            </p>
            <button onClick={onClickCelcius}>F/C</button>
          </div>
          <h4>Humidity : {weatherData.main.humidity} %</h4>
          <h4>Wind speed : {weatherData.wind.speed} km/h</h4>
        </div>
      </div>
    </div>
  );
}

export default App;

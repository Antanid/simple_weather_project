import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoPanel from "./components/InfoPanel";
import InputSearch from "./components/InputSearch";

import TextMain from "./components/TextMain";

function App() {
  const [inputCity, setInputCity] = useState<string>("");
  const [searchGo, setSearchGo] = useState<boolean>(false);
  const [tempToCel, setTempToCel] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
    },
    name: "",
    weather: [{ main: "", icon: "" }],
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
  

  const onSearchKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      setSearchGo(true);
    }
    console.log(e.key)
  };

  const onSearchButt = () => {
    setSearchGo(true);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <InputSearch
          onSearchKey={onSearchKey}
          inputChange={inputChange}
          inputCity={inputCity}
          onSearchButt={onSearchButt}
        />

        <InfoPanel
          tempToCel={tempToCel}
          weatherData={weatherData}
          onClickCelcius={onClickCelcius}
        />
      </div>
    </div>
  );
}

export default App;

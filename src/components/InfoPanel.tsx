import React from "react";

type InfoPanelProps = {
  weatherData: {
    main: {
      temp: number,
      feels_like: number,
      humidity: number,
    },
    name: string,
    weather: { main: string; icon: string }[],
    wind: {
      speed: number,
    },
  },
  tempToCel: boolean,
  onClickCelcius:() => void,
}

const InfoPanel: React.FC <InfoPanelProps> = ({weatherData, tempToCel, onClickCelcius}) => {
  return (
    <div className="infoPanel">


        <div className="cityName">
        <h3 className="locationCity">Location : {weatherData.name}</h3>
        </div>
      

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
          {Math.round(tempToCel ? weatherData.main.temp : (weatherData.main.temp - 32) * (5 / 9))}
          {tempToCel ? " F" : " C"}
        </h4>
        <p className="feelsTemp">
          Feels Like :{" "}
          {tempToCel
            ? `${Math.round(weatherData.main.feels_like)} F`
            : `${Math.round(((weatherData.main.feels_like - 32) * 5) / 9)} C`}
        </p>
        <button className="buttonFtoC" onClick={onClickCelcius}>Fahrenheit/Celsius</button>
      </div>

      <div className="otherInfo">
      <h4>Humidity : {weatherData.main.humidity} %</h4>
      <h4>Wind speed : {weatherData.wind.speed} km/h</h4>
      </div>
  
    </div>
  );
};

export default InfoPanel;

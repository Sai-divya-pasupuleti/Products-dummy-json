import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Weather in {weatherData.location.name}, {weatherData.location.country}</h2>
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>Condition: {weatherData.current.condition.text}</p>
      <img src={weatherData.current.condition.icon} alt="weather condition icon" />
      <p>Wind: {weatherData.current.wind_kph} kph</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
  

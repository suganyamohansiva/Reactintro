export const CityCard = ({ city, temperature, humidity, windSpeed, weatherDescription }) => {
    return (
      <div className="city-card">
        <h1>{city}</h1>
        <h2>{temperature}°C</h2>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} mph</p>
        <p>Weather Description: {weatherDescription}</p>
      </div>
    );
  };
  
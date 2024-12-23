export const DayCard = ({ day1,day2, date1,date2, temperature, humidity, windSpeed }) => {
    return (
      <div className="day-card">
        <h3>{day1}</h3>
        <p>Date: {date1}</p>
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} mph</p>
      <div className="day-card">
      <h3>{day2}</h3>
      <p>Date: {date2}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} mph</p>
      </div>
    </div>
    );
  }
  
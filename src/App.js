import logo from "./logo.svg";
import "./App.css";
import { Description } from "./Components/Description";
import { DescriptionInArrow } from "./Components/DescriptionInArrow";
import { Image } from "./Components/Image";
import { Button } from "./Components/Button";
import { CityCard } from "./Components/CityCard";
import { DayCard } from "./Components/DayCard";
import { Previous } from "./Components/Previous";
import { Next } from "./Components/Next";

function App() {
  let datajson;
  async function fetchData() {
  // let data = await fetch("https://freetestapi.com/api/v1/weathers");
  // datajson = await data.json();
  updateData();
  console.log(datajson);
}
fetchData();
let currentIndex = 0;
function updateData() {
  if (datajson && datajson.length > 0) {
    let place = document.getElementById("placeId");
    place.innerHTML = `${datajson[currentIndex].city}, ${datajson[currentIndex].country}`;

    let temperature = document.getElementById("temperature");
    temperature.innerHTML = `${datajson[currentIndex].temperature}`;

    let humidity = document.getElementById("humidity");
    humidity.innerHTML = `${datajson[currentIndex].humidity}`;

    let wind_speed = document.getElementById("wind_speed");
    wind_speed.innerHTML = `${datajson[currentIndex].wind_speed}`;

    let date1 = document.getElementById("dateId1");
    date1.innerHTML = `${datajson[currentIndex].forecast[0].date}`;

    let date2 = document.getElementById("dateId2");
    date2.innerHTML = `${datajson[currentIndex].forecast[1].date}`;

    let temperature1 = document.getElementById("temperatureId1");
    temperature1.innerHTML = `${datajson[currentIndex].forecast[0].temperature}`;

    let temperature2 = document.getElementById("temperatureId2");
    temperature2.innerHTML = `${datajson[currentIndex].forecast[1].temperature}`;

    let humidity1 = document.getElementById("humidityId1");
    humidity1.innerHTML = `${datajson[currentIndex].forecast[0].humidity}`;

    let humidity2 = document.getElementById("humidityId2");
    humidity2.innerHTML = `${datajson[currentIndex].forecast[1].humidity}`;

    let wind_speed1 = document.getElementById("wind_speedId1");
    wind_speed1.innerHTML = `${datajson[currentIndex].forecast[0].wind_speed}`;

    let wind_speed2 = document.getElementById("wind_speedId2");
    wind_speed2.innerHTML = `${datajson[currentIndex].forecast[1].wind_speed}`;
  }
}
  // document.getElementById("previous").onClick = function () {
  //   if (currentIndex > 0) {
  //     currentIndex--;
  //     updateData();
  //   }
  // };
  const previous=()=>{
    if (currentIndex > 0) {
      currentIndex--;
      updateData();
    }
  }
  const next=()=>{
    if (currentIndex > 0) {
      currentIndex++;
      updateData();
    }
  }
  // document.getElementById("next").onClick = function () {
  //   if (currentIndex < datajson.length - 1) {
  //     currentIndex++;
  //     updateData();
  //   }
  // };
  
   return (
     <div className="App">
       <CityCard />
       <DayCard />
       <Previous className="Previous"  id="previous" onClick={previous}/>
       <Next className="Next" id="next" onClick={next}/>
     </div>
   )
 }
export default App;

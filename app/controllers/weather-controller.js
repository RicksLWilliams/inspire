import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
  //let weather = store.State.weather.Template
  document.getElementById("weather").innerHTML = store.State.weather.Template
  //document.getElementById("weather").innerHTML = store.State.weather.nextTemp("fahrenheit")
}


export default class WeatherController {
  constructor() {
    store.subscribe("weather", _drawWeather);
    WeatherService.getWeather();
  }

  nextTemp(temp){
    document.getElementById("weather").innerHTML = store.State.weather.nextTemp(temp)
  }

}

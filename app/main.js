import ImageController from "./controllers/image-controller.js";
import TodoController from "./controllers/todo-controller.js";
import WeatherController from "./controllers/weather-controller.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.imageController = new ImageController();
    this.todoController = new TodoController();
    this.weatherController = new WeatherController();
  }
}

window["app"] = new App();

import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  //let template = ''
  //let cars = store.State.cars

  //cars.forEach((car, index) => template += car.getTemplate(index))
  //document.getElementById("cars").innerHTML = template
  document.body.style.backgroundImage = "url(https://cdna.artstation.com/p/assets/images/images/003/525/906/large/nick-tachynsky-render-1-copy.jpg?1474655407)"
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {

  constructor() {
    store.subscribe("image", _drawImage);
  }


}

import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {

  let image = store.State.image.img
  //console.log(image)
  document.body.style.backgroundImage = `url(${image})`
  //document.body.style.backgroundImage = "url(${https://splashbase.s3.amazonaws.com/moveast/regular/tumblr_nou459V39A1tomxvuo1_1280.jpg})"
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {

  constructor() {
    console.log("ImageController -constructor ")
    store.subscribe("image", _drawImage);
    //TodoService.getTodos();
    ImageService.getImage()

  }

  testImage(){
    console.log("ImageController -testImage ")
    //debugger
    ImageService.getImage()
  }




}

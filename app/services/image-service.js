import store from "../store.js";
import Image from "../Models/image.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  //constructor(){
  //  this.getImage()
  //}

  getImage() {
    //console.log("Getting the Todo List");
    imgApi.get()
    //TODO Handle this response from the server
    .then(res => {
      console.log(res.data)
      console.log(res.data.url)
      let image = new Image(res.data)
      store.commit("image", image)
      //let todos = res.data.data.map(rawTodorData => new ToDo(rawTodorData))
      //store.commit('todos', todos)
    })
    .catch(err => console.error(err))
  }

}

const imageService = new ImageService();
export default imageService;

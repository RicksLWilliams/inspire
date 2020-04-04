//document.body.style.backgroundImage = "url(https://cdna.artstation.com/p/assets/images/images/003/525/906/large/nick-tachynsky-render-1-copy.jpg?1474655407)"

export default class Image {
  constructor(data) {
    this.img = data.url

  }

  get Template() {
      return /*html*/  `
  <div class="col-4">
      <img src="{this.img}" alt="">
      <button class="btn btn-block btn-danger" onclick="app.pokemonController.catchActivePokemon()">Catch</button>
  </div>
      `
  }
}
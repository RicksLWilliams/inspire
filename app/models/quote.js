export default class Quote {
  constructor(data) {
    console.log('[RAW Quote API DATA]', data);

    //this.author = data.author
    //this.body = data.body
  }


  get Template() {
    return /*html*/  `
      <div> ${this.author}</div>
      <div> ${this.body}</div>
    `
  }


}
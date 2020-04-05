export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
  }


 // get Template() {
 //   return /*html*/  `
 //     <div> ${this.city}</div>
 //     <div onclick="app.weatherController.nextTemp('fahrenheit')" > ${this.kelvin} kelvin</div>
 //   `
 // }

  nextTemp(temp) {
    let temperature = 0
    let tempClick = ""

    switch (temp) {
      case 'kelvin':
        temperature  = this.kelvin;
        tempClick = ` onclick="app.weatherController.nextTemp('fahrenheit')"`

        break;
      case 'fahrenheit':
        temperature  = Math.round( this.kelvin * 9 / 5 -459.67)
        tempClick = ` onclick="app.weatherController.nextTemp('celsius')"`

        break;
      case 'celsius':
        temperature  = Math.round( this.kelvin -273.15)
        tempClick = ` onclick="app.weatherController.nextTemp('kelvin')"`

        break;

      default:
        break;
    }

    return /*html*/  `
      <div> ${this.city}</div>
      <div ${tempClick} > ${temperature} ${temp}</div>
    `
  }


}
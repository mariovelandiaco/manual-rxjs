const {asyncScheduler} = require('rxjs')

//Emular un setTimeout
const saludar = nombre => console.log(`Hola ${nombre}`)
asyncScheduler.schedule(saludar, 2000, 'Styven')

//Emular un setInterval
const subs = asyncScheduler.schedule(function(valor){
    this.schedule(valor+1, 1000)
    console.log(valor)
}, 1000, 0)

asyncScheduler.schedule(() => subs.unsubscribe(), 5000)
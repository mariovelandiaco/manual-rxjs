const {fromEvent} = require('rxjs')
const {EventEmitter} = require('events')

//1. Creamos un evento de NODEJS
const event = new EventEmitter()

setInterval(function() { 
	event.emit('saludo', {saludo:"Hola Mundo"}); 
}, 1000)

event.on('saludo', ({saludo})=>{
    console.log(saludo)
})

//2. Escuchamos el evento de NodeJS

$obs2 = fromEvent(event, 'saludo')

$obs2.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completado')
})

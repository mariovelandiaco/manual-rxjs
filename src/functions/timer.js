const {timer} = require('rxjs')

//Se ejecuta 1 vez pasado este tiempo
const obs$ = timer(3000)
obs$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completado')
})

/**
 * Se ejecuta despues del tiempo de primer argumento 
 * y luego se va ejecutando repetidamente con el 
 * tiempo del segundo argumento
 */

const obs2$ = timer(3000, 1000)

obs2$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error)
})

/**
 * Con esto se puede programar la ejecucion de una funcion
 */

const hoyEn5 = new Date()
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)

const obs3$ = timer(hoyEn5)

obs3$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completado')
})
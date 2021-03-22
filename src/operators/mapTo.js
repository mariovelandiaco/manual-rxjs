const {from, of} = require('rxjs')
const {mapTo} = require('rxjs/operators')

const object = {
    nombre:"Mario",
    apellido:"Velandia",
    habilidades:{
        php:67,
        javascript:70,
        python:47
    }
}

const obs$ = of(object).pipe(
    mapTo('Styven Ibarra')
)

obs$.subscribe(console.log)
const {of} = require('rxjs')
const {pluck} = require('rxjs/operators')

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
    pluck('nombre')
)

const obs2$ = of(object).pipe(
    pluck('habilidades', 'php')
)


obs$.subscribe(console.log)
obs2$.subscribe(console.log)
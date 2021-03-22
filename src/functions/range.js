const {range} = require('rxjs')

const obs$ = range(-5,5)

obs$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completado')
})
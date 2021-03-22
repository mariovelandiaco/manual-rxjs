const {timer} = require('rxjs')

const obs$ = timer(3000)

obs$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completado')
})
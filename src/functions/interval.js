const {interval} = require('rxjs')

const obs$ = interval(1000)

obs$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completado')
})
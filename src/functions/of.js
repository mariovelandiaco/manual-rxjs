const {of} = require('rxjs')

const obs$ = of(1,2,3,4,5,6)

obs$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completado')
})
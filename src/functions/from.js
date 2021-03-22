const {from} = require('rxjs')

const source$ = from([1,2,3,4,5,6,7,8,9])

source$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completado'),
    error: error => console.log(error)
})
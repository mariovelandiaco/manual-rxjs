const {take} = require('rxjs/operators')
const {range} = require('rxjs')

range(1,10).pipe(
    take(6)
).subscribe({
    next: console.log,
    complete: () => console.log('Completado antes de tiempo')
})
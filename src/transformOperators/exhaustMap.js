const { from, interval } = require('rxjs')
const { exhaustMap } = require('rxjs/operators')


interval(1000).pipe(
    exhaustMap((url) => new Promise(resolve => setTimeout( () => resolve(`Result: ${url}`), Math.floor(Math.random() * (2000 - 100)) + 100)))
)
.subscribe({
    next: value => console.log(value),
    complete: () => console.log(`Finalizado!`),
    error: error => console.log("error")
})
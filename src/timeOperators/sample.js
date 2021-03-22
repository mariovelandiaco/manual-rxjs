const { Observable, asyncScheduler, interval } = require("rxjs");
const { sample } = require('rxjs/operators')

const obs$ = new Observable(subs => {
    asyncScheduler.schedule((valor) => {
        subs.next(valor)
    }, 5000, 'Alto!')
})

interval(1000).pipe(
    sample(obs$)
).subscribe({
    next: value => console.log(`Muestra: ${value}`),
    complete: () => console.log(`OK!`)
})
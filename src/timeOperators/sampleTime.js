const { Observable, asyncScheduler } = require("rxjs");
const { sampleTime, filter, tap } = require('rxjs/operators')

const obs$ = new Observable(subs => {
    asyncScheduler.schedule(function(valor){
        subs.next(valor)
        this.schedule(valor+1, 1000, 0)
    }, 1000, 0)
})

obs$.pipe(
    sampleTime(3000)
).subscribe({
    next: value => console.log(`Primer valor: ${value}`),
    complete: () => console.log(`OK!`)
})
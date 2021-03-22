const { Observable, asyncScheduler } = require("rxjs");
const { throttleTime, filter, tap } = require('rxjs/operators')

const obs$ = new Observable(subs => {
    asyncScheduler.schedule(function(valor){
        subs.next(valor)
        this.schedule(valor+1, 1000)
    }, 1000, 0)
})

obs$.pipe(
    tap(console.log),
    filter( x => x <= 10),
    throttleTime(3000)
).subscribe({
    next: value => console.log(`Ultimo valor ${value}`),
    complete: () => console.log(`OK!`)
})
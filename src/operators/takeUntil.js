const { interval, asyncScheduler, Observable} = require("rxjs")
const {takeUntil} = require('rxjs/operators')


obs$ = new Observable(subs => {
    asyncScheduler.schedule(()=> subs.next('Alto!'), 5000)
})

interval(1000).pipe(
    takeUntil(obs$)
).subscribe({
    next: value => console.log(value),
    complete: ()=> console.log(`Abortado!`)
})
const { interval, asyncScheduler, Observable} = require("rxjs")
const {takeUntil, tap, skip} = require('rxjs/operators')

const obs$ = new Observable(subs => {
    asyncScheduler.schedule(function(valor){
        this.schedule(valor+1, 5000)
        subs.next(valor)
    }, 5000, 1)
}).pipe(
    tap(x => console.log(`Vamos en ${x} click`)),
    skip(1)
)

interval(1000).pipe(
    takeUntil(obs$)
).subscribe({
    next: value => console.log(value),
    complete: ()=> console.log(`Detenido!`)
})
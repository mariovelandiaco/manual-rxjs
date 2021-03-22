const { interval, merge } = require("rxjs");
const { take } = require("rxjs/operators");


const interval$ = interval(1000)

merge(
    interval$.pipe(take(3)),
    interval$.pipe(take(3)),
).subscribe(console.log)
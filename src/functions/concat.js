const { interval, concat, of } = require("rxjs");
const { take } = require("rxjs/operators");


const interval$ = interval(1000)

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1)
).subscribe(console.log)
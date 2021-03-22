const { interval, forkJoin } = require("rxjs");
const { take } = require("rxjs/operators");

const interval$ = interval(1000)

forkJoin([
    interval$.pipe(take(3)),
    interval$.pipe(take(5))
]).subscribe(console.log)
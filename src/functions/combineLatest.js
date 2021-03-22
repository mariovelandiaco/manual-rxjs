const { interval, combineLatest } = require("rxjs");
const { take } = require("rxjs/operators");


const interval$ = interval(1000)

combineLatest([
    interval$.pipe(take(3)),
    interval$.pipe(take(3)),
]).subscribe(console.log)
const { range } = require("rxjs");
const { takeWhile } = require("rxjs/operators");

range(1,100).pipe(
    takeWhile(x => x <= 50)
).subscribe(console.log)
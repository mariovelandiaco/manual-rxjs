const { of } = require("rxjs");
const { startWith } = require("rxjs/operators");

of(1,2,3,4,5,6,7,8,9).pipe(
    startWith('a')
).subscribe(console.log)
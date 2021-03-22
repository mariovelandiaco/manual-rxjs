const { of } = require("rxjs");
const { startWith, endWith } = require("rxjs/operators");

of(1,2,3,4,5,6,7,8,9).pipe(
    endWith('z')
).subscribe(console.log)
const {range} = require('rxjs')
const {first, tap} = require('rxjs/operators')

range(1,10).pipe(
    tap(x => console.log(`Debug: ${x}`)),
    first(num => num > 5)
).subscribe(console.log)
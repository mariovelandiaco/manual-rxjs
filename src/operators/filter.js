const {range} = require('rxjs')
const {filter} = require('rxjs/operators')

const obs$ = range(1,20).pipe(
    filter(x => x % 2 === 1)
)

obs$.subscribe(console.log)
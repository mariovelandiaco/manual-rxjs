const {range} = require('rxjs')
const {map} = require('rxjs/operators')

range(1,5).pipe(
    map(val => (val*10).toString())
).subscribe(console.log)
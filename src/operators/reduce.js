const {range} = require('rxjs')
const {take, reduce} = require('rxjs/operators')

const total = (acumulador, valoractual) =>{
    return acumulador + valoractual
}

range(1,10).pipe(
    reduce(total,0)
).subscribe(console.log)
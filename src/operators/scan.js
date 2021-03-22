const {range} = require('rxjs')
const {scan} = require('rxjs/operators')

const acumulador = (acumulador, valorActual) => acumulador + valorActual

range(1,10).pipe(
    scan(acumulador, 0)
).subscribe(console.log)
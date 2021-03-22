const {range} = require('rxjs')
const {tap} = require('rxjs/operators')


range(1,50).pipe(
    tap(x => console.log(`Obtuve el valor: ${x}`))
).subscribe({
    next: value => console.log(`Salida: ${value}`),
    complete: () => console.log(`Todo ok`)
})
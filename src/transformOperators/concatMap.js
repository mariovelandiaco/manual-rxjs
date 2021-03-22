const { from } = require('rxjs')
const { concatMap } = require('rxjs/operators')

const range = [...Array(10).keys()]
const urls = range.map(x => `https://rickandmortyapi.com/api/character/?page=${x+1}`)

from(urls).pipe(
    concatMap((url) => new Promise(resolve => setTimeout( () => resolve(`Result: ${url}`), 1000)))
)
.subscribe({
    next: value => console.log(value),
    complete: () => console.log(`Finalizado!`),
    error: error => console.log("error")
})
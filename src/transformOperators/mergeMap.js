const axios = require('axios')
const { from } = require('rxjs')
const { mergeMap, map } = require('rxjs/operators')

const range = [...Array(100).keys()]
const urls = range.map(x => `https://rickandmortyapi.com/api/character/?page=${x+1}`)

from(urls).pipe(
    mergeMap((url) => new Promise(resolve => setTimeout( () => resolve(`Result: ${url}`), 2000)))
)
.subscribe({
    next: value => console.log(value),
    complete: () => console.log(`Finalizado!`),
    error: error => console.log("error")
})
const axios = require('axios')
const { from } = require('rxjs')
const { map, mergeAll } = require('rxjs/operators')

const range = [...Array(50).keys()]
const urls = range.map(x => `https://rickandmortyapi.com/api/character/?page=${x+1}`)

from(urls).pipe(
    map((url) => {
        return axios.get(url)
    }),
    mergeAll()
).subscribe({
    next: value => console.log(value.data.info.next),
    complete: () => console.log(`Finalizado!`),
    error: error => console.log("error")
})
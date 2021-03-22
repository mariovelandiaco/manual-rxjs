const { from } = require("rxjs")
const {tap, distinct} = require("rxjs/operators")

const array = [
    {
        name:"mario"
    },
    {
        name:"styven"
    },
    {
        name:"velandia"
    },
    {
        name:"ibarra"
    },
    {
        name:"mario"
    },
    {
        name:"styven"
    },
    {
        name:"velandia"
    },
    {
        name:"ibarra"
    },
    {
        name:"mario"
    },
    {
        name:"styven"
    },
    {
        name:"velandia"
    },
    {
        name:"ibarra"
    }
]

from(array).pipe(
    distinct(x => x.name)
).subscribe({
    next: value => console.log(`Output: ${value.name}`),
    complete: () => console.log(`Finalizado!`)
})
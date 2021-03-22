const { from } = require("rxjs")
const {distinctUntilChanged} = require("rxjs/operators")

const array = [
    {
        name:"mario"
    },
    {
        name:"mario"
    },
    {
        name:"velandia"
    },
    {
        name:"velandia"
    },
    {
        name:"ibarra"
    },
    {
        name:"ibarra"
    },
    {
        name:"mario"
    },
    {
        name:"mario"
    },
    {
        name:"velandia"
    },
    {
        name:"velandia"
    },
    {
        name:"ibarra"
    },
    {
        name:"ibarra"
    }
]

from(array).pipe(
    distinctUntilChanged((anterior, actual) => anterior.name === actual.name)
).subscribe({
    next: value => console.log(`Output: ${value.name}`),
    complete: () => console.log(`Finalizado!`)
})
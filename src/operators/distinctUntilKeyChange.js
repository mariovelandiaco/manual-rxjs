const { from } = require("rxjs")
const {distinctUntilKeyChanged} = require("rxjs/operators")

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
    distinctUntilKeyChanged('name')
).subscribe({
    next: value => console.log(`Output: ${value.name}`),
    complete: () => console.log(`Finalizado!`)
})
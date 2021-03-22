const { interval } = require("rxjs");
const { auditTime, filter } = require('rxjs/operators')

interval(1000).pipe(
    filter(x => x <= 10),
    auditTime(2000)
).subscribe({
    next: value => console.log(`Muestra: ${value}`),
    complete: () => console.log(`OK!`)
})
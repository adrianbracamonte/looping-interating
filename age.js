let readlineSync = require('readline-sync')
let age = readlineSync.question('How old are you? ')
age = parseInt(age)

for (let future = 10; future <= 40; future += 10) {
    console.log(`In ${future} years, you will be ${age + future} years old.`)
}
function solve(inputB) {
    const input=+inputB
    let numTeam = []
    let numGame = 0
    let countG = 0
    for (let countT = 3; countG <= input; countT += 2) {
        let numT=countT
        countG = countG + 2 * countT - 3
        numGame = countG
        while (numGame <= input) {
            if (numGame === input) {
                numTeam.push(numT)
                numGame++
            } else {
                numGame=numGame+numT
                numT=numT*2
            }
        }
    }
    for(let countT=2; countT-1<=input; countT*=2){
        if(countT-1=== input ){
            numTeam.push(countT)
        }
    }
    numTeam.sort(function (a, b) {
        return +a - +b;
    })
    if (numTeam.length<1){
        numTeam.push(-1)
    }
    return numTeam.join(`\n`)
}
const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
console.log(solve(input))

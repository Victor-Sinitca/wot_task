function solve(input) {
    const numberOfFights = +input
    const half = numberOfFights/2+1
    let arrNumberOfTeams = []
    let numberOfGames = 0
    let gamesSRound = 0

    for (let teamsSRound = 3; gamesSRound <= numberOfFights; teamsSRound += 2) {
        let numberOfTeams = teamsSRound
        gamesSRound = gamesSRound + 2 * teamsSRound - 3
        numberOfGames = gamesSRound
        if (teamsSRound <= half) {
            while (numberOfGames <= numberOfFights) {
                if (numberOfGames === numberOfFights) {
                    arrNumberOfTeams.push(numberOfTeams)
                    numberOfGames++
                } else {
                    numberOfGames += numberOfTeams
                    numberOfTeams *= 2
                }
            }
        } else if (gamesSRound === numberOfFights) {
            arrNumberOfTeams.push(teamsSRound)
        }
    }
    for (let counterT = 2; counterT - 1 <= numberOfFights; counterT *= 2) {
        if (counterT - 1 === numberOfFights) {
            arrNumberOfTeams.push(counterT)
        }
    }

    if (arrNumberOfTeams.length === 0) {
        arrNumberOfTeams.push(-1)
    } else {
        arrNumberOfTeams.sort(function (a, b) {
            return +a - +b;
        })
    }
    return arrNumberOfTeams.join(`\n`)
}

const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
console.log(solve(input))

import React, {useEffect, useState} from 'react';
import './App.css';
import axios, {AxiosRequestConfig} from "axios";
import {debuglog} from "util";


const inputA = `0,1,1,5,6,88,87,79,55,44,  1,2,23,444,   5,777,8,9,8,999,44,1,4,55,5,6,54,55,56,59,3,998,997,996,665,995,994,993,992,991,990,1001,45`
/*const inputA =`1,3,1,4,5`*/

/*const inputA =`5,,1`*/
function solveA(input: string) {
    let output = ``
    let count = 1
    let arr = input.replace(/\s+/g, '').split(`,`)
    console.log(arr)
    arr.sort(function (a, b) {
        return +a - +b;
    })
    console.log(arr)
    arr = arr.filter((item, index, array) => {
        return !(index + 1 < array.length && item === array[index + 1]) && (+item !== 0);
    })
    /*arr = arr.filter((item, index, array) => {
        return arr.indexOf(item) === index
    })*/

    for (let i = 0; i < arr.length; i++) {
        while (i + count < arr.length && +arr[i] === +arr[i + count] - count) {
            count++
        }
        if (count > 1) {
            if (i === 0) {
                output = arr[i] + `-` + arr[i + count - 1]
            } else {
                output = output + `,` + arr[i] + `-` + arr[i + count - 1]
            }
            i = i + count - 1
        } else if (i === 0) {
            output = arr[i]
        } else {
            output = output + `,` + arr[i]
        }
        count = 1
    }


    console.log(arr)
    console.log(output)
}

function solveB(inputB: string) {
    const input = +inputB
    let numTeam = [] as number[]
    let numGame = 0
    let countG = 0
    for (let countT = 3; countG <= input; countT += 2) {
        let numT = countT
        countG = countG + 2 * countT - 3
        numGame = countG
        while (numGame <= input) {
            if (numGame === input) {
                numTeam.push(numT)
                numGame++
            } else {
                numGame = numGame + numT
                numT = numT * 2
            }
        }
    }
    for (let countT = 2; countT - 1 <= input; countT *= 2) {
        if (countT - 1 === input) {
            numTeam.push(countT)
        }
    }
    numTeam.sort(function (a, b) {
        return +a - +b;
    })
    if (numTeam.length < 1) {
        numTeam.push(-1)
    }
    return numTeam.join(`\n`)
}

function App() {

    /*solveA(inputA)*/
    /* for(let i=1; i<=200; i++){
        console.log(`${i}:${solveB(i)}`)
     }*/
    /*for (let i = 1; i <= 200; i++) {
        console.log(solveB(`` + i))
    }*/
    /*const array = [
        {id: 123,name: `wwww`},
        {id: 123,name: `wwww`},
        {id: 123,name: `wwww`},
        {id: 123,name: `wwww`}
    ]
    array.map((object)=>{
        console.log(`object: ${object}`) // object: [object Object]
        console.log(`object: ${JSON.stringify(object)}`) //object: {"id":123,"name":"wwww"}
    })*/

    return (
        <div>
            <div style={{backgroundColor: "red", height: 200, width: `100%`}}>
                11

            </div>
        </div>
    );
}

/*type RateType = {
    id: string | null,
    cast: string | null,
    parent_id: string | null,
    caption: string | null,
    title: string | null,
    rate: string | null,
}
type RatesType = Array<RateType>
function App() {
    const [rates, setRates] = useState<RatesType | null>(null)
    const readRates = rates?.map((r) =>
        <tr key={r.id} >
            <td style={{border:"solid", borderColor:"blue", padding:10}}>{r.caption || `not value`} </td>
            <td style={{border:"solid", borderColor:"blue", padding:10}}>{r.cast || `not value`}</td>
            <td style={{border:"solid", borderColor:"blue", padding:10}}>{r.id || `not value`}</td>
            <td style={{border:"solid", borderColor:"blue", padding:10}}>{r.parent_id || `not value`}</td>
            <td style={{border:"solid", borderColor:"blue", padding:10}}>{r.rate || `not value`}</td>
            <td style={{border:"solid", borderColor:"blue", padding:10}}>{r.title || `not value`}</td>
        </tr>
    )
    useEffect(() => {
        axios.get<RatesType>("http://api.vozim.by/?r=aping/ratesJson").then(({data}) => {
            setRates(data)
        })
    }, [])
    return (<div>
            <table style={{width:800, }}><tbody>{readRates}</tbody></table>
        </div>
    );
}*/

export default App;

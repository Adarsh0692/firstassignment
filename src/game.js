import React, { useState } from 'react'

export default function Game() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const [luckyNum, setLuckyNum] = useState(randomNumber)
    const [guessNum, setGuessNum] = useState('')
    const [result, setResult] = useState('')

    function handleCheck() {
        setGuessNum('')
        if (guessNum) {
            if (guessNum > luckyNum) {
                setResult('you guessed a bigger number')
            }
            if (guessNum < luckyNum) {
                setResult('you guessed a smaller number')
            }
            if (guessNum == luckyNum) {
                setResult('congratulations! you guessed the right number')
            }
        }

    }
    return (
        <div>
            <h1>Guess Lucky Number Game</h1>
            <h3>Guess a number between 1 to 10</h3>
            <input placeholder='guess lucky number..' type="number" value={guessNum} onChange={(e) => setGuessNum(e.target.value)} /> <br /> <br />
            <button onClick={handleCheck}>Match Number</button>
            <p>{result}</p>

        </div>
    );
}
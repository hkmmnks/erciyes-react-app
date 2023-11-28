import React, { useState } from 'react'

function StateSampleAddRandom() {

    const [numbers, setNumbers] = useState([3, 10])

    const addRandom = () => {
        const randomNumber = Math.floor(Math.random() * 100)
        console.log(randomNumber)
        if (!numbers.includes(randomNumber)) {
            setNumbers([...numbers, randomNumber])
        }
    }

    return (
        <>
            <button onClick={addRandom}>Add Random</button>
            <ul>
                {numbers.map((number, index) => (
                    <li key={(index)}>{number}</li>
                ))}
            </ul>
        </>
    )
}

export default StateSampleAddRandom
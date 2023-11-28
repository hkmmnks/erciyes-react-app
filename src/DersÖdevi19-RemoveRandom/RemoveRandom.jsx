import React, { useState } from 'react'

function RemoveRandom() {

    const [numbers, removeRandom] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])


    function removeNumber() {
        const randomIndex = Math.floor(Math.random() * numbers.length)
        const newNumbers = [...numbers]
        newNumbers.splice(randomIndex, 1)
        removeRandom(newNumbers)
    }
    function removeAll() {
        const newNumbers = [...numbers]
        newNumbers.splice(0, newNumbers.length)
        removeRandom(newNumbers)
    }

    return (
        <>
            <button onClick={removeNumber}>Remove</button>
            <button onClick={removeAll}>Remove ALL</button>
            <ul>
                {numbers.map((Number, index) => (
                    <li key={(index)}>{Number}</li>
                ))}
            </ul>


        </>
    )
}

export default RemoveRandom
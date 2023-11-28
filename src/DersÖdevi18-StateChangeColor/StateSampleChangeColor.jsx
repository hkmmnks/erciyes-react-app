import React, { useState } from 'react'

function StateSampleChangeColor() {

    const colors = ['aqua', 'black', 'brown', 'blue', 'gray', 'gold', 'green', 'orange', 'red', 'pink']
    const [randomColor, setRandomColor] = useState('white')

    const change = () => {
        let randomIndex = Math.floor(Math.random() * colors.length)
        setRandomColor(colors[randomIndex])
    }

    return (
        <>
            <button onClick={change}>Change Color</button>
            <div style={{ backgroundColor: randomColor, width: '100vw', height: '100vh' }}></div>
        </>
    )
}

export default StateSampleChangeColor
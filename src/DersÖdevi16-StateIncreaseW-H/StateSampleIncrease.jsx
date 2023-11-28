import React, { useState } from 'react'

function StateSampleIncrease() {

    const [height, setHeight] = useState(200)
    const [width, setwidth] = useState(200)

    const increase = () => {
        setHeight(height + 100)
        setwidth(width + 100)
    }


    return (
        <>
            <button onClick={increase}>Increase</button>
            <div style={{ backgroundColor: "black", width: width, height: height }}>

            </div>
        </>
    )
}

export default StateSampleIncrease
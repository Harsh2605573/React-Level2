import React, { useState } from 'react'

function First() {

    const [text , setText] = useState(0)


    const handleAdd1 = (i) => {
        setText(text + i)
    }

    const handleAdd2 = (i) => {
        setText(text - i)
    }

    const handleAdd3 = (i) => {
        setText(text * i)
    }

    const handleAdd4 = (i) => {
        setText(text / i)
    }

    return (
        <div style={{textAlign:'center'}}>
           {text}<button onClick={() => handleAdd1(10)} style={{margin:'10px'}}>Add</button>
           <button onClick={() => handleAdd2(10)} style={{margin:'10px'}}>Min</button>
           <button onClick={() => handleAdd3(10)} style={{margin:'10px'}}>Mul</button>
           <button onClick={() => handleAdd4(10)} style={{margin:'10px'}}>Div</button>
        </div>
      )
}

export default First

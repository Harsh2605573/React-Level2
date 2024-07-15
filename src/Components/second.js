import React, { useState } from 'react'

function Second() {
  const [text, setText] = useState('Helllo')
  const [data, setData] = useState([])
  const [index , setIndex] = useState(-1)

  const handleAdd = () => {


    if (index === -1) {
      const copy = [...data]
      copy.push(text)
      setData(copy)
      setText('')
    }
    else{

      const copy = [...data]
      copy[index] = text
      setData(copy)
      setIndex(-1)
      setText('')
    }
    

  }

  const removeElement = (i) => {
    const remove = [...data]
    remove.splice(i , 1)
    setData(remove)
    // setData(remove)
  }

  const Update = (el,i) => {
  setText(el)
  setIndex(i)
  }

return (
  <>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} name="" id="" />
    <button onClick={() => handleAdd()}>Add</button>

    {data.map((el, i) => (
        <p key={i}>{el} <button onClick={() => removeElement(i)}>Delete</button>
        <button onClick={() => Update(el,i)}>Edit</button>
        </p>
        
    ))}
  </>
)

}

export default Second

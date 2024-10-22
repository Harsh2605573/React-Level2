import React, { useState } from 'react'

function Data() {
    const [text ,setText] = useState({firstname: "" , lastname: ""})
    const [ data , setData] = useState([])
    const [cnt, setCnt] = useState(-1)

    

    const handledAdd = () =>{
      if (cnt=== -1)
      {
        const copy = [...data]
        copy.push(text)

        setData(copy)

        setText('')
      }
      else{
        const copy = [...data]
        copy[cnt]= text
        setData(copy)
        setCnt(-1)
        setText('')

      }
        
     
    }

    const RemoveElement= (i)=>{
      const remove = data.filter((el,value)=> value !==i)
      setData(remove)
    }

    const Update= (value,el)=>{
      setText(value)
      setCnt(el)
    }

    const Text2 = (e)=>{
      setText({
        ...text,
        [e.target.name] : e.target.value
      })
    }
    
  return (
    <>
        <input type='text' name='firstname' value={text.firstname} onChange={Text2}></input>
        

        <input type='text' name='lastname' value={text.lastname} onChange={Text2}></input>
        <button type='Submit' onClick={handledAdd}>Add</button>


        

        {data.map((el , i)=>(
            
           <table>
            <thead>
                <tr>
                    <td>FName</td>
                    <td>LName</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{el.firstname}</td>
                    <td>{el.lastname}</td>
                </tr>
            </tbody>
           </table>

        ))}
    </>
  )
}

export default Data
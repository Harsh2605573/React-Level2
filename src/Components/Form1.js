import React, { useState } from 'react'

function Form1() {

  const [formData, setFormData] = useState({ firstname: "", lastname: "", number: "", email: "" });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
     <div className="App">
      <h1>Table</h1>
      <form >
        <label>
        FirstName:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        LastName:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      </div>
  
    </>
  )
}

export default Form1

import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
function Dummy() {
    const [data, setData] = useState([])
    const [text, setText] = useState({ firstName: "", lastName: "", email: "" })
    const handleAdd = () => {
        const copy = [...data]
        copy.push(text)
        setData(copy)
        setText('')
    }


    useEffect(() => {
        fetchData()
    }, [])
   const fetchData = () => {
        axios.get('https://service.apikeeda.com/api/v1/contact-book', {
            headers: {
                "x-apikeeda-key": "o1721908402693ghk823955654gp"
            }
        })
            .then((res) => {
                console.log(res.data.data);
                // setData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    mobileNo: '',
                    nickName: ''

                }}
                onSubmit={async (values, { resetForm }) => {
                    // axios.post('https://service.apikeeda.com/api/v1/contact-book', values, {
                    //     headers: {
                    //         "x-apikeeda-key": "o1721908402693ghk823955654gp"
                    //     }
                    // })
                    //     .then((res) => {
                    //         console.log(res);
                    //         fetchData()
                    //     })
                    //     .catch((err) => {
                    //         console.log(err);
                    //     })
                    setData([values])
                    resetForm("")
                    
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />

                    <label htmlFor="mobileNo">mobileNo</label>
                    <Field id="mobileNo" name="mobileNo" placeholder="Doe" />



                    <label htmlFor="nickName">nickName</label>
                    <Field id="nickName" name="nickName" placeholder="Doe" />



                    <button type="submit" onClick={handleAdd}>Submit</button>
                </Form>
            </Formik>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>mobileNo</th>
                        <th>nickName</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, i) => (
                        <tr key={i}>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.email}</td>
                            <td>{el.mobileNo}</td>
                            <td>{el.nickName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Dummy

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    mobile: Yup.string()
        .min(10, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

});


function Formm() {
    const [data, setData] = useState([])
    const [initialValues, setInitialValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''
    })
   

    const delet = (i) => {
        const remove = [...data]
        remove.splice(i, 1)
        setData(remove)
    }

    const handleEdit = (el) => {
        setInitialValues(el)
        
    }
    return (
        <>
            <div className="form">
                <h1>Sign Up</h1>
                <Formik
                    initialValues={{
                        firstName: initialValues.firstName || '',
                        lastName: initialValues.lastName || '',
                        email: initialValues.email || '',
                        mobile:initialValues.mobile ||  ''
                    }}
                    enableReinitialize
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { resetForm }) => {
                        setData([values])
                        resetForm("")
                    }}

                >
                    <Form className="form1">
                        <label htmlFor="firstName" className="form2">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="Jane" />
                        <ErrorMessage name="firstName" component={'p'} />

                        <label htmlFor="lastName" className="form2">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Doe" />
                        <ErrorMessage name="lastName" component={'p'} />

                        <label htmlFor="email" className="form2">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <ErrorMessage name="email" component={'p'} />

                        <label htmlFor="mobile" className="form2">mobile</label>
                        <Field id="mobile" name="mobile" placeholder="Doe" />
                        <ErrorMessage name="mobile" component={'p'} />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                <table>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el, i) => (
                            <tr key={i}>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.email}</td>
                                <td>{el.mobile}</td>
                                <button onClick={() => delet(i)}>Delete</button>
                                <button onClick={()=> handleEdit(el)}>edit</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    );
}

export default Formm;

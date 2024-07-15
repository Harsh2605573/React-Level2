import React , { useState } from "react";
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

});


function Formm() {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const handleAdd = () => {
        const copy = [...data]
        copy.push(text)
        setData(copy)
        setText('')
    }
    return (
        <>
            <div className="form">
                <h1>Sign Up</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        mobile: ''
                    }}

                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {
                        console.log(values);
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

                        <button type="submit" onClick={() => handleAdd()}>Submit</button>
                    </Form>
                </Formik>
            </div>
            {data.map((el, i) => (
                <p key={i}>{el}</p>
            ))}
        </>
    );
}

export default Formm;

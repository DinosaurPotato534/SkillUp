import React from 'react'
import ValidationSchema from '../schema';
import { Formik, Form, Field, ErrorMessage } from 'formik';



export default function SignUp() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        role: '',
    }

  return (
    <div>
        <h1 className='form__head--text'>Create an Account</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Form>
                <div className="form__field">
                    <Field name='name' type='text' placeholder="Name"/>
                    <ErrorMessage name='name' component="p" />
                </div>

                <div className="form__field">
                    <Field name='email' type='email' placeholder="Email"/>
                    <ErrorMessage name='email' component="p"/>
                </div>

                <div className="form__field">
                    <Field name='password' type='password' placeholder="Password"/>
                    <ErrorMessage name='password' component="p"/>
                </div>

                <div className="form__field">
                    <Field name='role' as='select'>
                        <option value=''>Role</option>
                        <option value='mentee'>Mentee</option>
                        <option value='mentor'>Mentor</option>
                    </Field>
                    <ErrorMessage name='role' component="p" />
                </div>

                <button type='submit'>Sign Up</button>
                <div><p>or continue with </p></div>
                <div className="form__field">
                    <button type='button'><img></img></button>
                    <button type='button'>Facebook</button>
                </div>
                <p>Already have an account? <a href="#">Sign In</a></p>
            </Form>
        </Formik>

    </div>
  )
}

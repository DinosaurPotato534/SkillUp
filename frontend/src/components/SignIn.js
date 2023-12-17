import React from 'react'
import ValidationSchema from '../schema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import google from '../assets/images/google.svg';
import '../assets/styles/style.css'
import { Link } from "react-router-dom";
import axios from 'axios';



export default function SignIn() {

    const initialValues = {
        email: '',
        password: '',
    }

    const handleSubmit = async (values) => {
        try {
          const response = await axios.post('http://localhost:5000/api/signin', values);
          
          console.log('User registered:', response.data);
        } catch (error) {
          console.error('Failed to register user:', error);
        }
      };
    

  return (
    <div className='form__contanier'>
        <h1 className='form__head--text'>Welcome Back</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Form>
                <div className='field'>
                    <Field name='email' type='email' placeholder="Email" className="form__field"/>
                    <ErrorMessage name='email' component="p" className='error'/>
                </div>

                <div className='field'>
                    <Field name='password' type='password' placeholder="Password" className="form__field"/>
                    <ErrorMessage name='password' component="p" className='error'/>
                </div>
                <button type='submit' id= "btn__cta" className='form__field'>Log In</button>
                <div><p>or continue with </p></div>
                <div className='field'>
                    <a href="#"><button className='oauth-btn form__field' type='button '><img src={google} className='oauth-svg'></img></button></a>
                </div>
                <p>Don't have an account? <Link to="/signUp">Sign Up</Link></p>
            </Form>
        </Formik>

    </div>
  )
}

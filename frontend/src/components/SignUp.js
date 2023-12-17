import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import google from '../assets/images/google.svg';
import '../assets/styles/style.css';
import { Link } from "react-router-dom";

const ValidationSchema = Yup.object({
  name: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
  role: Yup.string().oneOf(['mentee', 'mentor'], 'Invalid Role').required('Required'),
});

export default function SignUp() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    role: '',
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', values);
      
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Failed to register user:', error);
    }
  };

  return (
    <div className='form__contanier'>
      <h1 className='form__head--text'>Create an Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className='field'>
            <Field name='name' type='text' placeholder='Name' className='form__field' />
            <ErrorMessage name='name' component='p' className='error' />
          </div>
          <div className='field'>
            <Field name='email' type='email' placeholder='Email' className='form__field' />
            <ErrorMessage name='email' component='p' className='error' />
          </div>
          <div className='field'>
            <Field name='password' type='password' placeholder='Password' className='form__field' />
            <ErrorMessage name='password' component='p' className='error' />
          </div>
          <div className='field'>
            <Field name='role' as='select' className='form__field'>
              <option value=''>Role</option>
              <option value='mentee'>Mentee</option>
              <option value='mentor'>Mentor</option>
            </Field>
            <ErrorMessage name='role' component='p' className='error' />
          </div>
          <button type='submit' id='btn__cta' className='form__field'>
            Sign Up
          </button>
          <div>
            <p>or continue with </p>
          </div>
          <div className='field'>
            <a href='#'>
              <button className='oauth-btn form__field' type='button '>
                <img src={google} className='oauth-svg' alt='Google' />
              </button>
            </a>
          </div>
          <p>
            Already have an account? <Link to="/signIn">Login In</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

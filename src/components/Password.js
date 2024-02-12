import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import { passwordValidate } from '../helper/validate';
import styles from '../styles/Username.module.css';

export default function Password() {

  const formik= useFormik({
    initialValues:{
      password  :'example123',
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto w-full h-screen">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex items-center justify-center h-screen">
        <div className={styles.glass}>
          <div className="title mt-10 flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Log In</h4>
          </div>
          <form className='space-y-4 mt-5 ' onSubmit={formik.handleSubmit}>
            <div className='textbox flex flex-col items-center gap-4'>
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
              <button className={styles.btn} type='submit'>Log In</button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-600'>Forgot Password? <Link className='text-green-400 font-bold' to='/recovery'>Request for Recovery</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
import React from "react";
import { Link ,Navigate} from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope,faTriangleExclamation,faSquareCheck  } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import  '../Login/stylel.css';

function Login() {
  
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email address Required *'),
    password: Yup.string().required('Password is required*').max(8,'Password must be at most 8 characters')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      showPassword:false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted successfully', values);
      
      // Check credentials match
      if (values.email === 'kmb@gmail.com' && values.password === '12345678') {
        console.log('Login successful!');
        setLoggedIn(true);
        ;
      } else {
        console.log('Invalid Credentials');
        formik.setErrors({ password: 'Invalid password',email: 'Invalid email address' });
      }
    },
  });

  const togglePasswordVisibility = () => {
    formik.setFieldValue('showPassword', !formik.values.showPassword);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn) {
    return <Navigate to="/dashbord"/>;
    

  }

  return (
    <div className="main-container">
      <div className="success">
        {formik.submitCount > 0 && Object.keys(formik.errors).length === 0 && (
          <div className="ui message success">Signed in successfully<i><FontAwesomeIcon icon={faSquareCheck} style={{color:"#22e224",}}/></i></div>
        )}
        {formik.submitCount > 0 && Object.keys(formik.errors).length > 0 && (
          <div className="ui message error">Invalid Credentials<i><FontAwesomeIcon icon={faTriangleExclamation} style={{color:"#ff0000",}} /></i></div>
        )}
      </div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <div className="form-group email">
          <label htmlFor="email">Email Address</label>
          {formik.touched.email && formik.errors.email && (
            <span className="error">{formik.errors.email}</span>
          )}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <i><FontAwesomeIcon icon={faEnvelope} /></i>

        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          {formik.touched.password && formik.errors.password && (
            <span className="error">{formik.errors.password}</span>
          )}
          <input
            type={formik.values.showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <i>
            <FontAwesomeIcon
              icon={formik.values.showPassword ? faEye : faEyeSlash}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </i>

        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Login" />
        </div>
        <p className="info">Don't have an account?<Link to='/Register'>Register Here..</Link></p>
      </form>
    </div>
  );
}

export default Login;

import React, { startTransition } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faPhone, faUser,faTriangleExclamation,faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import  '../Register/styler.css';

function Register() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter your name *'),
    phone: Yup.string().required('Enter your mobile number *'),
    email: Yup.string().email('Invalid email format').required('Enter your email address *'),
    password: Yup.string().required('Enter your password *').min(6, 'Password must be at least 6 characters').max(8, 'Password must be at most 8 characters'),
    cpassword: Yup.string().required('Enter your confirm password *')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      cpassword: '',
      showPassword:false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted successfully', values);
    },

  });

  const togglePasswordVisibility = () => {
    formik.setFieldValue('showPassword', !formik.values.showPassword);
  };

  return (
    <div className="main-container">
      <div className="success">
        {formik.submitCount > 0 && formik.isValid && (
          <div className="ui message success">Registered successfully!<i><FontAwesomeIcon icon={faSquareCheck} style={{color:"#22e224",}}/></i></div>
        )}
        {formik.submitCount > 0 && !formik.isValid && (
          <div className="ui message error">Enter Proper Details For Registration<i><FontAwesomeIcon icon={faTriangleExclamation} style={{color:"#ff0000",}}/></i></div>
        )}
      </div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Form Validation</h2>
        <div className="form-group fullname">
          <label htmlFor="name">Full Name</label>
          {formik.touched.name && formik.errors.name && <span className="error">{formik.errors.name}</span>}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
         <i><FontAwesomeIcon icon={faUser}/></i>
        </div>
        <div className="form-group phone">
          <label htmlFor="phone">Mobile Number</label>
          {formik.touched.phone && formik.errors.phone && <span className="error">{formik.errors.phone}</span>}

          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Enter your mobile number"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          <i><FontAwesomeIcon icon={faPhone}/></i>
        </div>
        <div className="form-group email">
          <label htmlFor="email">Email Address</label>
          {formik.touched.email && formik.errors.email && <span className="error">{formik.errors.email}</span>}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <i><FontAwesomeIcon icon={faEnvelope}/></i>
        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          {formik.touched.password && formik.errors.password && <span className="error">{formik.errors.password}</span>}

          <input
            type={formik.values.showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
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
        <div className="form-group password">
          <label htmlFor="cpassword">Confirm Password</label>
          {formik.touched.cpassword && formik.errors.cpassword && (
            <span className="error">{formik.errors.cpassword}</span>
          )}
          {formik.touched.cpassword && !formik.errors.cpassword && (
            <span className="success">password matched</span>
          )}
          <input
            type={formik.values.showPassword ? 'text' : 'password'}
            id="cpassword"
            name="cpassword"
            placeholder="Enter your Confirm password"
            value={formik.values.cpassword}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Register" />
        </div>
        <p className="info">
          Have an account?<Link to="/Login">Login Here..</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';

function Register() {
  const initialValues = { name: '', phone: '', email: '', password: '', cpassword: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter your name *'),
    phone: Yup.string().required('Enter your mobile number *'),
    email: Yup.string().email('Invalid email format').required('Enter your email address *'),
    password: Yup.string().required('Enter your password *').min(6, 'Password must be at least 6 characters').max(8, 'Password must be at most 8 characters'),
    cpassword: Yup.string().required('Enter your confirm password *'),

  });

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
    validationSchema.validateAt(name, { [name]: value })
      .then(() => {
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      })
      .catch((error) => {
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
      });
      validateField(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema.validate(formValues, { abortEarly: false })
      .then(() => {
        setIsSubmitted(true);
        console.log('Form submitted successfully');
        setFormErrors({});
      })
      .catch((errors) => {
        setIsSubmitted(false);
        const formErrors = {};
        errors.inner.forEach((error) => {
          formErrors[error.path] = error.message;
        });
        setFormErrors(formErrors);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    console.log('Form Values:', formValues);
    console.log('Form Errors:', formErrors);
    
  }, [formValues,formErrors]);

  const validateField = (name, value) => {
    if (name === 'cpassword') {
      // Validate password match for cpassword field
      const isMatch = value === formValues.password;
      setPasswordMatch(isMatch ? 'Passwords matched' : '');
    }
  };

  return (
    <div className="main">
      <div className="success">
        {Object.keys(formErrors).length === 0 && isSubmitted && (
          <div className="ui message success">Registered successfully!</div>
        )}
        {Object.keys(formErrors).length > 0 && isSubmitted && (
          <div className="ui message error">Enter Proper Details For Registration</div>
        )}
      </div>
       <form onSubmit={handleSubmit}>
        <h2>Form Validation</h2>
        <div className="form-group fullname">
          <label htmlFor="name">Full Name</label>
          {formErrors.name && <span className="error">{formErrors.name}</span>}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group phone">
          <label htmlFor="phone">Mobile Number</label>
          {formErrors.phone && <span className="error">{formErrors.phone}</span>}
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Enter your mobile number"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group email">
          <label htmlFor="email">Email Address</label>
          {formErrors.email && <span className="error">{formErrors.email}</span>}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          {formErrors.password && <span className="error">{formErrors.password}</span>}
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
          />
          <i>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </i>
        </div>
        <div className="form-group password">
          <label htmlFor="cpassword">Confirm Password</label>
          {passwordMatch && <span className="success">{passwordMatch}</span>}
          {!passwordMatch && <span className="error">Passwords do not match</span>}
          <input
            type={showPassword ? 'text' : 'password'}
            id="cpassword"
            name="cpassword"
            placeholder="Enter your Confirm password"
            value={formValues.cpassword}
            onChange={handleChange}
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


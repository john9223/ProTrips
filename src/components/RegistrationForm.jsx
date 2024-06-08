import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [data, setdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!data.firstName) newErrors.firstName = 'Please enter your first name!';
    if (!data.lastName) newErrors.lastName = 'Please enter your last name!';
    if (!data.email) newErrors.email = 'Please enter your email!';
    if (!data.contacts) newErrors.contacts = 'Please enter your contacts!';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Registration successful!');
      setdata({
        firstName: '',
        lastName: '',
        email: '',
        contacts: ''
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </label>
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </label>
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>
          Contacts:
          <input
            type="text"
            name="contacts"
            value={data.contacts}
            onChange={handleChange}
          />
        </label>
        {errors.contacts && <p style={{ color: 'red' }}>{errors.contacts}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

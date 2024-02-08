import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.repeatPassword) {
      alert('All fields are required. Please fill in all fields.');
      return;
    }

    if (formData.password.length < 10 || !/\W/.test(formData.password)) {
      alert('Password should be at least 10 characters long with at least one special character.');
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match. Please enter the same password in both fields.');
      return;
    }

    localStorage.setItem('user', JSON.stringify(formData));

    console.log('User registered:', formData);

    navigate('/CA-5');
  };

  React.useEffect(() => {
    if (registeredUser) {
      console.log('User registered:', registeredUser);
    }
  }, [registeredUser]);

  return (
    <div className="register-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="new-password" />
        </label>
        <label>
          Repeat Password:
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterForm;

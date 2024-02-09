import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import FormInputField from './FormInputField';

const RegisterFormSec = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();        // prevents the page from refreshing

    try {
      await axios.post("https://moka-backend.onrender.com/auth/register", {
        username: newUsername,
        password: newPassword
      });

      navigate('/');
      console.log('account created!');
    }
    catch (err) {
      document.querySelector('.form-error-alert').style.display = 'block';
      console.error(err);
    }
  };

  return (
    <form className='py-12 flex flex-col items-center w-fit mx-auto mt-16' onSubmit={handleSubmit}>
      <div>
        {/* Form title */}
        <h1 className="font-bold text-3xl label-text">Create new account</h1>

        {/* Form input fields */}
        <FormInputField
          inputId='newUsername'
          inputType='text'
          inputLabel='New Username:'
          inputPlaceholder='Enter username'
          inputVal={newUsername}
          inputOnChangeEvent={(e) => setNewUsername(e.target.value)}
        />
        <FormInputField
          inputId='newPassword'
          inputType='password'
          inputLabel='New Password:'
          inputPlaceholder='Enter password'
          inputVal={newPassword}
          inputOnChangeEvent={(e) => setNewPassword(e.target.value)}
        />

        {/* Submit btn */}
        <button type='submit' className="btn btn-primary mt-10 w-full">Create new account</button>

        {/* Login label */}
        <span className='flex gap-2 mt-8'>
          <h6>Already registered?</h6>
          <Link to='/login' className='underline hover:text-slate-400'>Log in</Link>
        </span>
      </div>
    </form>
  );
};

export default RegisterFormSec;
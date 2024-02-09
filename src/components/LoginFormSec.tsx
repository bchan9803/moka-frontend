import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import FormInputField from './FormInputField';

const LoginFormSec = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();        // prevents the page from refreshing

    try {
      const res = await axios.post("https://moka-backend.onrender.com/auth/login", {
        username: username,
        password: password
      });

      // set login cookies
      setCookies("access_token", res.data.token);
      window.localStorage.setItem("userId", res.data.userId);

      console.log('logged in');
      navigate('/');      // redirect to home page
    }
    catch (err) {
      document.querySelector('.form-error-alert').style.display = 'block';
      console.error(err);
    }
  };

  return (
    <form className='py-12 flex flex-col items-center w-fit mx-auto mt-16' onSubmit={handleSubmit}>

      {/* Form title */}
      <div className="">
        <h1 className="font-bold text-3xl label-text">Log in</h1>

        {/* Form input fields */}
        <FormInputField
          inputId='username'
          inputType='username'
          inputLabel='Username:'
          inputPlaceholder='Enter username'
          inputVal={username}
          inputOnChangeEvent={(e) => setUsername(e.target.value)}
        />
        <FormInputField
          inputId='password'
          inputType='password'
          inputLabel='Password:'
          inputPlaceholder='Enter password'
          inputVal={password}
          inputOnChangeEvent={(e) => setPassword(e.target.value)}
        />

        {/* Submit btn */}
        <button type='submit' className="btn btn-primary mt-10 w-full">Log in</button>
        {/* Sign up label */}
        <span className='flex gap-2 mt-8'>
          <h6>Don't have an account?</h6>
          <Link to='/register' className='underline hover:text-slate-400'>Sign Up</Link>
        </span>
      </div>
    </form>
  );
};

export default LoginFormSec;
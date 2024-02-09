import React from 'react';
import RegisterFormSec from '../components/RegisterFormSec';
import FormErrorAlert from '../components/FormErrorAlert';

const Register = () => {
  return (
    <main>
      <FormErrorAlert />
      <RegisterFormSec />
    </main>
  );
};

export default Register;
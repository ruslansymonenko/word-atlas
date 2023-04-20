import React from 'react';

import AuthForm from '../../components/forms/AuthForm/AuthForm';

import './RegistrationPage.scss';

const RegistrationPage = () => {
  return (
    <div className="registration">
      <AuthForm 
        formType={'registration'}
      />
    </div>
  )
}

export default RegistrationPage
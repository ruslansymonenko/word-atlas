import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './AuthForm.scss';

import authFormValidation from '../../../utils/authFormValidation';

const AuthForm = ({formType = 'login'}) => {
  const [form, setForm] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [inputsValidation, setInputsValidation] = useState({
    email: true,
    password: true
  })

  const handleSendForm = (e) => {
    e.preventDefault();
    const formValidation = authFormValidation(formData.email, formData.password);
    console.log(formValidation);
    if (formValidation.validation === true) {
      showValidationErrors(formValidation.message, formValidation.errorField);
      setFormData({...formData, email: '', password: ''});
      console.log('sent data')
    } else {
      showValidationErrors(formValidation.message, formValidation.errorField);
    }
  }

  const handleCancelForm = (e) => {
    e.preventDefault();
    setFormData({...formData, email: '', password: ''});
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const showValidationErrors = (errorMessage, errorField) => {
    switch (errorField) {
      case 'email':
        setInputsValidation({...inputsValidation, email: false, password: true})
        break
      case 'password':
        setInputsValidation({...inputsValidation, email: true, password: false})
        break
      case 'both': 
        setInputsValidation({...inputsValidation, email: false, password: false})
        break
      case '': 
        setInputsValidation({...inputsValidation, email: true, password: true})
        break
      default: 
        setInputsValidation({...inputsValidation, email: true, password: true})
    }
  }

  useEffect(() => {
    if (formType === 'registration') {
      setForm('registration');
    } else {
      setForm('login');
    }
  }, [formType])

  return (
    <form className="auth-form">
      <h1 className="auth-form__title">
        {
          form === 'registration' ? 
            "Still don\'t have an account?" 
            : 
            "Already have an account?"
        }
      </h1>
      
      <div className="auth-form__input-container">
        <label htmlFor="email">Your email</label>
        <input 
          className={
            inputsValidation.email ? 'auth-form__input' : 'auth-form__input auth-form__input--error'
          } 
          type="text" 
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleInputChange}
          />
      </div>

      <div className="auth-form__input-container">
        <label htmlFor="password">Your password</label>
        <input 
          className={
            inputsValidation.password ? 'auth-form__input' : 'auth-form__input auth-form__input--error'
          } 
          type="password" 
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleInputChange}
          />
      </div>
      
      <div className="auth-form__btns">
        <button 
          className='auth-form__btn'
          onClick={handleSendForm}
          >
          Send
        </button>
        <button 
          className='auth-form__btn'
          onClick={handleCancelForm}
          >
          Cancel
        </button>
      </div>

      <Link 
        className='auth-form__link'
        to={
          form === 'registration' ? 
            "/login" 
            : 
            "/registration"
        }
        >
        {
          form === 'registration' ? 
            "Login page" 
            : 
            "Registration page"
        }
      </Link>
    </form>
  )
}

export default AuthForm;
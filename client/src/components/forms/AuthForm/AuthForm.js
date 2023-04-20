import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './AuthForm.scss';

import formValidation from '../../../utils/formValidation';

const AuthForm = ({formType = 'login'}) => {
  const [form, setForm] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSendForm = (e) => {
    e.preventDefault();
    formValidation(formData.email, formData.password);
  }

  const handleCancelForm = (e) => {
    e.preventDefault();
    setFormData({...formData, email: '', password: ''})
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    console.log(formData);
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
          className='auth-form__input auth-form__email' type="text" 
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleInputChange}
          />
      </div>

      <div className="auth-form__input-container">
        <label htmlFor="password">Your password</label>
        <input 
          className='auth-form__input auth-form__password' type="password" 
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
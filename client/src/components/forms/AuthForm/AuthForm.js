import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert, hideAlert } from '../../../store/slices/alertSlice'

import StandartAlert from '../../alerts/StandartAlert/StandartAlert';

import './AuthForm.scss';

import authFormValidation from '../../../utils/authFormValidation';
import { registerUser, loginUser, checkIsAuth } from '../../../store/slices/authSlice';

const AuthForm = ({formType = 'login'}) => {
  const [form, setForm] = useState('');
  const [formData, setFormData] = useState({email: '',password: ''});
  const [inputsValidation, setInputsValidation] = useState({email: true, password: true});

  const requestStatus = useSelector((state) => state.auth.status);
  const isAuth = useSelector(checkIsAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSendForm = (e) => {
    e.preventDefault();
    const formValidation = authFormValidation(formData.email, formData.password);

    if (formValidation.validation === true) {

      showValidationErrors(formValidation.errorField);
      sendAuthInformation();
      setFormData({...formData, email: '', password: ''});

    } else {
      showValidationErrors(formValidation.errorField);
      handleAlerts(formValidation.message, 'alert-error');
    }
  }

  const sendAuthInformation = async () => {
    if (form === 'registration') {
      dispatch(registerUser({email: formData.email, password: formData.password}));
    } else if (form === 'login') {
      dispatch(loginUser({email: formData.email, password: formData.password}));
    }
  }

  const handleAlerts = useCallback( (text, type) => {
    dispatch(showAlert({
      message: text, 
      type: type
    }));

    setTimeout(() => {
      dispatch(hideAlert());
    }, 1500)
  }, [dispatch])

  const handleCancelForm = (e) => {
    e.preventDefault();
    setFormData({...formData, email: '', password: ''});
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const showValidationErrors = (errorField) => {
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
  }, [formType]);

  useEffect(() => {
    if (requestStatus !== null) {
      handleAlerts(requestStatus, 'alert-standart');
      setTimeout(() => {
        if (isAuth) {
          navigate('/');
        }
      }, 1600)
    }
  }, [requestStatus, isAuth, handleAlerts, navigate])

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

      <StandartAlert/>
    </form>
  )
}

export default AuthForm;
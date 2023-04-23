import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { checkIsAuth } from '../../store/slices/authSlice';

import AppHeader from '../../components/AppHeader/AppHeader';
import UserDataModal from '../../components/modals/UserData/UserDataModal';

import './MainPage.scss';

const MainPage = () => {
  const isAuth = useSelector(checkIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate])

  return (
    <div className='main'>
      <AppHeader/>

      <UserDataModal/>
    </div>
  )
}

export default MainPage
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logOut, checkIsAuth } from '../../store/slices/authSlice';

const MainPage = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispath = useDispatch();
  const navigate = useNavigate();

  console.log(isAuth);
  const handleLogOut = () => {
    dispath(logOut());
    window.localStorage.removeItem('token');
  }

  useEffect(() => {
    if(isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate])

  return (
    <div className='main'>
      Hello user
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default MainPage
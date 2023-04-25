import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { checkIsAuth } from '../../store/slices/authSlice';
import { getUserData } from '../../store/slices/userDataSlice'


import AppHeader from '../../components/AppHeader/AppHeader';
import UserDataModal from '../../components/modals/UserData/UserDataModal';

import './MainPage.scss';

const MainPage = () => {
  const isAuth = useSelector(checkIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const {email, nickName, createdAt} = useSelector(state => state.auth.user);
  const userData = useSelector(state => state.userData.user);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  useEffect(() => {
    if(isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate])

  return (
    <div className='main'>
      {userData ? (
        <>
          <AppHeader
            userEmail={userData.email}
            userNickName={userData.nickName}
          />

          <UserDataModal
            userEmail={userData.email}
            userNickName={userData.nickName}
            timestamp={userData.createdAt}
          />
        </>
      ) : <h1>Hello</h1>}
    </div>
  )
}

export default MainPage
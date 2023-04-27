import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkIsAuth, logOut } from '../../store/slices/authSlice';
import { showModal } from '../../store/slices/userDataModalSlice';

import './AppHeader.scss';

import userImg from '../../assets/icons/user-img.svg';
import logOutImg from '../../assets/icons/log-out.svg';
import editImg from '../../assets/icons/edit-img.svg';

const AppHeader = ({userEmail = 'email', userNickName = 'nickname'}) => {
  const isAuth = useSelector(checkIsAuth);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispath(logOut());
    window.localStorage.removeItem('token');
  }

  const showUserData = () => {
    dispath(showModal());
  }

  useEffect(() => {
    if(isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate])


  return (
    <header className='app-header'>
      <div className="container">
        <div className="app-header__content">
          <h1 className='app-header__title'>
            Word Atlas
          </h1>
          <div className="app-header__user">
            <div className="app-header__user-info">
              <div className="header-user__img">
                <img className="header-user__img-item" src={userImg} alt="user-img" />
              </div>
              <h2 className='header-user__name'>
                Hello, 
                {
                  userNickName ? userNickName : userEmail
                }
              </h2>
              <button 
                className='header-user_name-btn'
                onClick={showUserData}
                >
                <img className='header-user_name-img' src={editImg} alt="change-name" />
              </button>
            </div>
            <div className="app-header__user-controllers">
              <button 
              className='user-controllers__logout'
              onClick={handleLogOut}
              >
                <img src={logOutImg} alt="log out" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
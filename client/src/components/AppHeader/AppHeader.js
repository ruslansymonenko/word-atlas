import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkIsAuth, logOut } from '../../store/slices/authSlice';

import './AppHeader.scss';

import userImg from '../../assets/icons/user-img.svg';
import logOutImg from '../../assets/icons/log-out.svg';

const AppHeader = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispath = useDispatch();
  const navigate = useNavigate();

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
    <header className='app-header'>
      <h1 className='app-header__title'>
        Word Atlas
      </h1>
      <div className="app-header__user">
        <div className="app-header__user-info">
          <div className="header-user__img">
            <img className="header-user__img-item" src={userImg} alt="user-img" />
          </div>
          <h2 className='header-user__name'>
            Hello, User
          </h2>
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
    </header>
  )
}

export default AppHeader
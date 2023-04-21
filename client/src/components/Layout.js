import {Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { checkIsAuth } from '../store/slices/authSlice';

import StartPage from '../pages/StartPage/StartPage';
import MainPage from '../pages/MainPage/MainPage';

const Layout = () => {
  const isAuth = useSelector(checkIsAuth);

  return (
    <div>
      {
        isAuth ? (
          <MainPage/>
        ) : (
          <StartPage/>
        )
      }
    </div>
  )
}

export default Layout;
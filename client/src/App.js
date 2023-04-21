import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getMe } from './store/slices/authSlice'

import StartPage from './pages/StartPage/StartPage';
import AuthCheckPage from './pages/AuthCheckPage/AuthCheckPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import MainPage from './pages/MainPage/MainPage';

import Layout from './components/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  });

  return (
    <div className="app">
      <Routes>
        <Route index path='/' element={<Layout/>}/>
        <Route index path='/' element={<MainPage/>}/>
        <Route path='/start' element={<StartPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/check' element={<AuthCheckPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

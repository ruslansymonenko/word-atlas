import {Route, Routes} from 'react-router-dom';

import StartPage from './pages/StartPage/StartPage';
import AuthCheckPage from './pages/AuthCheckPage/AuthCheckPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

import Layout from './components/Layout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index path='/' element={<StartPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/check' element={<AuthCheckPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

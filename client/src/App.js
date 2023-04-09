import {Route, Routes} from 'react-router-dom';

import StartPage from './pages/StartPage/StartPage';
import AboutPage from './pages/AboutPage/AboutPage';

import Layout from './components/Layout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index path='/' element={<StartPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

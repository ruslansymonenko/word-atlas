import {Route, Routes} from 'react-router-dom';

import StartPage from './components/StartPage/StartPage';

import Layout from './components/Layout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index path='/' element={<StartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

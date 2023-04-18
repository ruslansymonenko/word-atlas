import { Link, useNavigate } from 'react-router-dom';

import './AuthCheckPage.scss';

import cloudImg from '../../assets/images/auth-check-page/cloud.png';
import bookImg from '../../assets/images/auth-check-page/auth-check-book.png';

const AuthCheckPage = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  }

  return (
    <div className='authcheck'>
      <div className="container">
        <div className="authcheck-content">
          <div className="authcheck-clouds__imgs">
            <img className='authcheck-clouds__imgs-item' src={cloudImg} alt="cloud"/>
            <img className='authcheck-clouds__imgs-item' src={cloudImg} alt="cloud"/>
            <img className='authcheck-clouds__imgs-item' src={cloudImg} alt="cloud"/>
            <img className='authcheck-clouds__imgs-item' src={cloudImg} alt="cloud"/>
            <img className='authcheck-clouds__imgs-item' src={cloudImg} alt="cloud"/>
            <img className='authcheck-clouds__imgs-item' src={cloudImg} alt="cloud"/>
          </div>
          <h1 className="authcheck-title">
            Do you have an account?
          </h1>
          <div className="authcheck-btns">
            <button 
              className="button authcheck-btn__login"
              onClick={() => handleRedirect('/login')}
              >
              <Link 
                to={'/login'}
              >
                Yes
              </Link>
            </button>
            <button 
              className="button authcheck-btn__register"
              onClick={() => handleRedirect('/registration')}
              >
              <Link 
                to={'/registration'}
              >
                No
              </Link>
            </button>
          </div>
        </div>
      </div>

      <img className="authcheck-book__img" src={bookImg} alt="book img" />
    </div>
  )
}

export default AuthCheckPage;
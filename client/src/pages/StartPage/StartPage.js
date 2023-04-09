import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

import './StartPage.scss';

import startImg from '../../assets/images/start-page-img.png';

const StartPage = () => {
  const [isLinkActive, setLinkAcitve] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);
  const navigate = useNavigate();

  const handlePagesSwitch = () => {
    setLinkAcitve(true);
    setHideAnimation(true);
  }

  useEffect(() => {
    const img = document.querySelector('.start-img');
    const startPageContent = document.querySelector('.start-content');

    if(hideAnimation) {
      startPageContent.classList.add('start--hide-text');
      img.classList.add('start--hide-img');
    } else {
      startPageContent.classList.remove('start--hide-text');
      img.classList.remove('start--hide-img');
    }
  }, [hideAnimation])

  useEffect(() => {
    const handleRedirect = () => {
      navigate('/about');
    }

    if(isLinkActive) {
      setTimeout(handleRedirect, 1000);
    }

  }, [isLinkActive, navigate])

  return (
    <div className='start'>
      <div className='container'>
        <div className='start-content'>
          <h1 className='start-title'>
            Word Atlas!
          </h1>
          <h2 className='start-subtitle'>
            Discover the world of foreign languages with Word Atlas.
          </h2>
          <button 
            className='start-btn'
            onClick={handlePagesSwitch}
          >
            <Link 
              to={isLinkActive ? '/about' : '#'}
            >
              Let's go
            </Link>
          </button>
        </div>
      </div>
      <img className='start-img' src={startImg} alt='' />
    </div>
  )
}

export default StartPage
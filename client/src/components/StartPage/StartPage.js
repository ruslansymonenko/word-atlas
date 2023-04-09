import {Link} from 'react-router-dom' 

import './StartPage.scss';

import startImg from '../../assets/images/start-page-img.png';

const StartPage = () => {
  return (
    <div className='start'>
      <div className='container'>
        <div className='start-content'>
          <h1 className='start-title'>
            Word Atlas!
          </h1>
          <h2 className='start-subtitle'>
            Discover the world of words with word atlas
          </h2>
          <button className='start-btn'>
            <Link>Let's go</Link>
          </button>
        </div>
      </div>
      <img className='start-img' src={startImg} alt='' />
    </div>
  )
}

export default StartPage
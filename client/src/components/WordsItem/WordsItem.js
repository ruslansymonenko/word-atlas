import './WordsItem.scss';

import arrowImg from '../../assets/icons/arrow.png';
import deleteBtn from '../../assets/icons/close-img.svg';

const WordsItem = () => {
  return (
    <div className='words-item words-item__level-high'>
      <div className="words-item__words">
        <span className='words-item__words-original'>
          Hello
        </span>
        <span>-</span>
        <span className='words-item__words-translation'>
          Привіт
        </span>
      </div>
      <div className="words-item__levels">
        <button className="words-item__levels-btn">
          <img className='words-item__levels-img' src={arrowImg} alt="level low" />
        </button>
        <span className="words-item__levels-level">
          Low
        </span>
        <button className="words-item__levels-btn">
          <img className='words-item__levels-img  words-item__levels-img--up' src={arrowImg} alt="level up" />
        </button>
      </div>
      <button className='words-item__btn-delete'>
        <img className='words-item__img-delete' src={deleteBtn} alt="delete" />
      </button>
    </div>
  )
}

export default WordsItem
import './WordsListsItem.scss';

import deleteImg from '../../assets/icons/close-img.svg';

const WordsListsItem = () => {
  return (
    <div className='words-lists__item'>
      <span className='words-lists__item-text'>
        My list
      </span>
      <button className='words-lists__item-btn'>
        <img className='words-lists__item-img' src={deleteImg} alt="delete list" />
      </button>
    </div>
  )
}

export default WordsListsItem
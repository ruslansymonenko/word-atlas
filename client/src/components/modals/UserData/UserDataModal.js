
import { useSelector, useDispatch } from 'react-redux';

import { hideModal } from '../../../store/slices/userDataModalSlice';

import './UserDataModal.scss';

import closeImg from '../../../assets/icons/close-img.svg';
import userImg from '../../../assets/icons/user-img.svg';

const UserData = () => {
  const dispath = useDispatch();
  const modalVisibility = useSelector(state => state.userDataModal.visibility);

  const userEmail = useSelector(state => state.auth.user.email);

  const closeModal = () => {
    dispath(hideModal())
  }

  return (
    <div 
    className=
    {
      modalVisibility ? 'modal-container modal-container--active' : 'modal-container'
    }
    >
      <div 
        className=
        {
          modalVisibility ? 'modal modal--active user-data__modal' : 'modal user-data__modal'
        }
      >
        <div className="user-data__modal-row">
          <div className="user-data__modal-photo">
            <img className='user-data__modal-img' src={userImg} alt="user img"/>
          </div>
          <button className='button user-data__modal-btn'>
            Change
          </button>
        </div>
        <div className="user-data__modal-row">
          <span className='user-data__modal-nickname'>
            Nickname
          </span>
          <button className='button user-data__modal-btn'>
            Change
          </button>
        </div>
        <div className="user-data__modal-row">
          <span className='user-data__modal-email'>
            {userEmail}
          </span>
        </div>
        <div className="user-data__modal-row">
          <h3 className='user-data__modal-title'>
            Registration date
          </h3>
          <span className='user-data__modal-date'>
              23.04.23
          </span>
        </div>
        <button className='button user-data__modal-save'>
            Save changes
        </button>


        <button 
          className='modal-close__btn'
          onClick={closeModal}
        >
          <img src={closeImg} alt="close-modal" />
        </button>
      </div>
    </div>
  )
}

export default UserData
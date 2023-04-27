
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideModal } from '../../../store/slices/userDataModalSlice';
import { showAlert } from '../../../store/slices/alertSlice';
import { setUserNickName } from '../../../store/slices/userDataSlice';

import { getDate } from '../../../utils/getDate';

import './UserDataModal.scss';

import closeImg from '../../../assets/icons/close-img.svg';
import userImg from '../../../assets/icons/user-img.svg';

const UserData = ({
    userEmail, 
    userNickName, 
    timestamp,
    userId
  }) => {
  const dispath = useDispatch();
  const modalVisibility = useSelector(state => state.userDataModal.visibility);

  const [modalData, setModalData] = useState({
    photoUrl: userImg,
    nickName: '',
    userId: userId
  });
  const [isChanged, setIsChanged] = useState(false);
  const [shouldWatchChanges, setShouldWatchChanges] = useState(false);
  const [isNicknameChanging, setIsNicknameChanging] = useState(false);

  const registrationDate = getDate(timestamp);


  const closeModal = () => {
    dispath(hideModal())
  }

  const handleSaveChanges = () => {
    if (isChanged === false) {
      handleAlerts('You made no changes', 'alert-error');
    } else if (isChanged === true) {
      if(isNicknameChanging) {
        handleAlerts('Save changes first', 'alert-error');
      } else {
        sendChanges(modalData, userId);
        handleAlerts('Your changes has been saved', 'alert-standart');
      }
    }
  }

  const sendChanges = ({photoUrl, nickName, userId}) => {
    dispath(setUserNickName({
      nickname: nickName,
      userId: userId
    }));
  }

  const handleAlerts = (text, type) => {
    dispath(showAlert({
      message: text,
      type: type
    }));
  }

  const handleNicknameChanges = () => {
    setIsNicknameChanging(!isNicknameChanging);
    setShouldWatchChanges(true);
  }

  useEffect(() => {
    if(userNickName) {
      setModalData({...modalData, nickName: userNickName})
    } else {
      setModalData({...modalData, nickName: 'Add your nickname...'});
    }
  }, []);

  useEffect(() => {
    if(shouldWatchChanges) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [shouldWatchChanges]);


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
          <div className="button user-data__modal-btn">
            <label htmlFor="user-photo">
              Change
              <input id="user-photo" 
              type='file' 
              style={{display: 'none'}} />
            </label>
          </div>
        </div>
        <div className="user-data__modal-row">
          <input 
            className={
              isNicknameChanging ? 'user-data__modal-nickname user-data__modal-nickname--active' : 'user-data__modal-nickname'
            } 
            type="text" 
            readOnly={!isNicknameChanging}
            value={modalData.nickName}
            onChange={(e) => setModalData({...modalData, nickName: e.target.value})}
          />
          <button 
            className='button user-data__modal-btn'
            onClick={handleNicknameChanges}
          >
            {isNicknameChanging ? 'Save' : 'Change'}
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
              {registrationDate}
          </span>
        </div>
        <button 
          className={
            isChanged ? 'button user-data__modal-save user-data__modal-save--active' : 'button user-data__modal-save'
          }
          onClick={handleSaveChanges}
        >
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
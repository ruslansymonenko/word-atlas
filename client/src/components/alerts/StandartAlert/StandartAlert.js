import { useSelector, useDispatch } from 'react-redux';

import './StandartAlert.scss';
import { hideAlert } from '../../../store/slices/alertSlice';

const StandartAlert = () => {
  const active = useSelector((state) => state.alert.active);
  const text = useSelector((state) => state.alert.message);
  const alertType = useSelector((state) => state.alert.type);
  const dispatch = useDispatch();

  const handleAlertActive = (e) => {
    e.preventDefault();
    dispatch(hideAlert())
  }

  return (
    <div className={
      active ? 
        `alert alert-active ${alertType}` 
        :
        `alert ${alertType}`
    }
    >
      <span className='alert-message'>
        {text}
      </span>
      <button 
        className='alert-btn__close'
        onClick={handleAlertActive}
        >
        X
      </button>
    </div>
  )
}

export default StandartAlert;
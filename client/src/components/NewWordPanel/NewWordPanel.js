import './NewWordPanel.scss';

const NewWordPanel = () => {
  return (
    <div className='panel'>
      <input 
        className='panel-input panel-word' 
        type="text" 
        placeholder='word'
      />
      <input 
        className='panel-input panel-translation' 
        type="text" 
        placeholder='translation'
      />
      <select className='panel-level'>
        <option value="option1" selected>Low</option>
        <option value="option2">Medium</option>
        <option value="option3">High</option>
      </select>
      <div className="panel-btns">
        <button className='panel-btn'>Add</button>
        <button className='panel-btn'>Cancel</button>
      </div>
    </div>
  )
}

export default NewWordPanel
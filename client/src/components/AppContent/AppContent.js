import WordsLists from '../WordsLists/WordsLists';
import NewWordPanel from '../NewWordPanel/NewWordPanel';
import Words from '../Words/Words';

import './AppContent.scss';

const AppContent = () => {
  return (
    <div className='content-wrapper'>
      <div className="container">
        <div className="content">
          <WordsLists/>
          <div className="content-items">
            <NewWordPanel/>
            <Words/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppContent
import React from 'react';
import Pic1 from './Image/1.jpg'

const App = () => {
    return(
        <div className='ui comments'>
          <div className='comments'>
            <a href="/" className='avatar'>
              <img src={Pic1} alt="Profile picture"></img>
            </a>
   
            <div className='content'>
              <a href="/" className='author'>
                Preety Singh
              </a>

              <div className='metadata'>
                <span className='date'>Today at 5:00 Pm</span>
              </div>
              <div className='text'>
                Welcome to ReactJs Blog
              </div>
            </div>
          </div>
        </div>
    )
}
export default App;

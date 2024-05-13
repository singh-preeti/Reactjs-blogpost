import React from 'react';
import Pic1 from './Image/1.jpg'
import Pic2 from './Image/2.jpg'

import SingleComment from './SingleComment';

const App = () => {
    return(
        <div className='ui comments'>
          <SingleComment 
            name='Preety'
            date='Today at 5:00 PM' 
            text="Welcome to Reactjs Blog"
            pic={Pic1}/>
            
          <SingleComment  name='Andy'
           date='Today at 6:00 PM'
           text="Welcome to new Reactjs journey"
           pic={Pic2}/>
        </div>
    )
}
export default App;
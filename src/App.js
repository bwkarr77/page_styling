import React, {useEffect} from 'react';
import logo from './logo.svg';
import './styling.scss';

import {Button} from '@material-ui/core';

const handleClick = () => {

}


function App() {
  useEffect(() => {
    window.onscroll = function() {
      console.log('scrolling', pageHeight, pageLocation, appScreen, appScreen.height)
    };

    let appScreen = window.screen
    let pageHeight = document.getElementById('App').offsetHeight
    let pageLocation = window.pageYOffset

  })


  return (
    <div id="App">
      <nav className="navBar">
      <Button onClick={() => {

      }}>Button</Button>
      </nav>
      <div className="block-section one">
        {/* <p>Section 1</p> */}
      </div>
      <div className="block-section two">
        {/* <p>Section 2</p> */}
      </div>
      <div className="block-section three">
        {/* <p>Section 3</p> */}
      </div>
      <div className="block-section four">
        {/* <p>Section 4</p> */}
      </div>
      <div className="block-section five">
        {/* <p>Section 5</p> */}
      </div>
    </div>
  );
}

export default App;

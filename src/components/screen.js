import React from 'react';
import '../style.css';

const Screen = (props) => {
  return (
    <div>
      <div unselectable="off" className="screen" id="display">
        <h2>ipod.js</h2>
        {props.display.map((item, index) => (
          <div className="screen-elements" id={item} key={index}>
            {item}
          </div>
        ))}
      </div>
      {/* tabs */}
      <div id="Coverflow-screen" className="tab"></div>
      <div id="Music-screen" className="tab"></div>
      <div id="Games-screen" className="tab"></div>
      <div id="Settings-screen" className="tab"></div>
    </div>
  );
};

//export screen
export default Screen;

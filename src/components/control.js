import React from 'react';
import '../style.css';

const Control = (props) => {
  return (
    <div
      unselectable="off"
      id="menu"
      className="controls"
      onClick={props.scroll}
    >
      {/* menu button */}
      <button id="menu-button" className="buttons" onClick={props.mainScr}>
        MENU
      </button>

      <div>
        <button className="option-button" onClick={props.options}></button>
      </div>
    </div>
  );
};

// export control
export default Control;

// importing required files
import React from 'react';
import './style.css';
import ZingTouch from 'zingtouch';
import Control from './components/control';
import Screen from './components/screen';
import Games from './images/games.png';
import Settings from './images/settings.png';
import Music from './images/music.png';
import Cover from './images/CoverFlow.jpg';
import ipod from './images/ipod.jpg';

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ['Coverflow', 'Music', 'Games', 'Settings'],
    };
  }

  // handling the scroll
  handleScroll = () => {
    let angle = 0;
    const target = document.getElementById('menu');
    const region = new ZingTouch.Region(target);
    region.bind(target, 'rotate', (e) => {
      angle = angle + e.detail.distanceFromLast;
      if (Math.abs(angle) > 0 && Math.abs(angle) < 20) {
        this.handleColor();
        let curEle = document.getElementById('Coverflow');
        curEle.style.backgroundColor = 'red';
        curEle.style.color = 'white';
      }
      if (Math.abs(angle) > 15 && Math.abs(angle) < 35) {
        this.handleColor();
        let curEle = document.getElementById('Music');
        curEle.style.backgroundColor = 'red';
        curEle.style.color = 'white';
      }

      if (Math.abs(angle) > 30 && Math.abs(angle) < 50) {
        this.handleColor();
        let curEle = document.getElementById('Games');
        curEle.style.backgroundColor = 'red';
        curEle.style.color = 'white';
      }
      if (Math.abs(angle) >= 45 && Math.abs(angle) < 65) {
        this.handleColor();
        let curEle = document.getElementById('Settings');
        curEle.style.backgroundColor = 'red';
        curEle.style.color = 'white';
      }

      if (Math.abs(angle) > 65) {
        angle = 0;
      }
    });
  };

  // handiling color of the components
  handleColor = () => {
    let div = document.getElementById('Coverflow');
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
    div = document.getElementById('Music');
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
    div = document.getElementById('Games');
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
    div = document.getElementById('Settings');
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
  };

  //main screen
  mainScreen = () => {
    let current = document.getElementsByClassName('tab');

    let currentScreen = '';

    for (currentScreen of current) {
      if (currentScreen.style.visibility == 'visible') {
        break;
      }
    }

    currentScreen.style.visibility = 'hidden';
    currentScreen.style.height = '0';
    currentScreen.style.width = '0';

    let home = document.getElementById('display');
    home.style.visibility = 'visible';
    home.style.height = '45%';
    home.style.width = '85%';
    home.style.borderTopLeftRadius = '3%';
    home.style.borderTopRightRadius = '5%';
    home.style.marginTop = '1%';
  };

  //handle screen
  switchScreen = (e) => {
    let home = document.getElementById('display');
    home.style.visibility = 'hidden';
    home.style.height = '0';
    home.style.width = '0';
    let screen = document.getElementById(e.innerHTML + '-screen');
    if (document.getElementById('title') != null) {
      document.getElementById('title').remove();
    }
    let img = document.createElement('img');

    if (e.innerHTML === 'Music') {
      img.setAttribute('src', Music);
    } else if (e.innerHTML === 'Games') {
      img.setAttribute('src', Games);
    } else if (e.innerHTML === 'Settings') {
      img.setAttribute('src', Settings);
    } else {
      img.setAttribute('src', Cover);
    }
    img.id = 'title';
    img.style.height = '100%';
    img.style.width = '100%';

    screen.appendChild(img);

    screen.style.alignmentBaseline = 'center';
    screen.style.position = 'absolute';
    screen.style.visibility = 'visible';
    screen.style.height = '45%';
    screen.style.width = '85%';
    screen.style.borderRadius = '3%';
    screen.style.marginLeft = '151px';
  };

  //handle click
  Click = () => {
    let elements = document.getElementsByClassName('screen-elements');

    let i;
    for (i of elements) {
      if (i.style.backgroundColor == 'red') {
        break;
      }
    }
    this.switchScreen(i);
  };

  render() {
    return (
      <div className="ipod">
        <img src={ipod} style={({ height: 600 }, { width: 600 })} />
        <Screen display={this.state.display} />
        <Control scroll={this.handleScroll} mainScr={this.mainScreen} options={this.Click}/>
      </div>
    );
  }
}

//Exporting Ipod
export default Ipod;

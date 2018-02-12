import React from 'react';

// Import files
import '../stylesheets/main.css';
import Pomodoro from './Pomodoro';
 
const Greeting = (props) => {
  let currentGreeting = null;
  const currentHour = new Date().getHours();
  if (currentHour < 12){
    currentGreeting = "Good morning";
  }
  else if (currentHour < 17){
    currentGreeting = "Good afternoon";
  }
  else {
    currentGreeting = "Good evening";
  }

  let greetingUser = null;
  if(props.greetingToggle){
    greetingUser = (
    <div className="greeting-time-of-day">
     <span className="greeting-input">
      <form className='greetingForm' onSubmit={props.greetingSubmit}>
        <input id="greetingID" onChange={props.greetingHandler} type="text" />
        <input className="invisibleInput" type="submit" />
      </form>
     </span>
    </div>
    );
  }
  else {
    greetingUser = (
      <div className="greeting-time-of-day">
        {currentGreeting},
        <span className="greeting-name" onClick={props.greetingToggleHandler}>{props.user}</span>
        .
      </div>
    );
  }

  let modifyTime = props.currentTime;
  modifyTime = modifyTime.split('');
  modifyTime.splice(4, 3);
  modifyTime.join('');
  return (
  <div className="greeting-container"> 
      {greetingUser}

      <p className="greeting-time">{modifyTime}</p>
      <Pomodoro />
      <div className="picture-credits">
        <p>Photographed by <a href="https://www.pexels.com/photo/light-landscape-nature-red-33041/" target="_blank" rel="noopener">Paul IJsendoorn</a></p>
      </div>
  </div>
  );
}

export default Greeting;

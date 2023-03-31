import React from 'react'
import './style.css'

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import video from './assets/video.mp4'

function App() {
  return (
  
    <section className="page">
  
        <div className='overlay'></div>
          <video autoPlay loop muted src={video}></video>
          <div className='content'>
            <h1>Coming Soon Starter</h1>
            <h3>Leave your email and we'll let you know once the website goes live</h3>
            <FlipClockCountdown
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000} 
            className='flip-clock'
            labels={['DAYS', 'HOURS','MINUTES','SECONDS']}
            duration={0.5}
            />
          </div>
           
        
          
      

    </section>
  );
}

export default App;

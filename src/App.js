import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Logo from './images/logo.png';
import DarkMode from './images/dark-mode.png';
import LightMode from './images/light-mode.png';
import RightArrow from './images/right-arrow.png';
import Typewriter from 'typewriter-effect';
import Icon from './images/icon.png'
import WorkCard from './components/WorkCard';

function App() {
  let effectController = useRef(false)
  const [clickHandler, setClickHandler] = useState(false);
  let [theme, setTheme] = useState('light-mode');
  const modeIcon = useRef(DarkMode);

  useEffect(() => {
    if (effectController.current === true) {
      modeIcon.current.src === DarkMode ? modeIcon.current.src = LightMode : modeIcon.current.src = DarkMode
      theme === 'light-mode' ? setTheme('dark-mode') : setTheme('light-mode')
    }
    // eslint-disable-next-line
  }, [clickHandler])

  return (
    <div className={`App ${theme}`}>
      <header>
        <div className="header-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="header-links">
          <button>PROJECTS</button>
          <button>CONTACT</button>
          <button className='resume-button'>RESUME <img src={RightArrow} alt="" /></button>
          <button onClick={() => { setClickHandler(!clickHandler); effectController.current = true; }} className='mode-button'><img src={DarkMode} ref={modeIcon} alt="Mode Icon" /></button>
        </div>
      </header>
      <section className='info-area'>
        <div className="info-image">
          <img src={Icon} alt="" />
        </div>
        <div className="info-name-area">
          <h1>Hi, I'm Kerim</h1>
        </div>
        <div className="info-typewriter-area">
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Web Development')
                  .deleteAll()
                  .typeString('React Development')
                  .deleteAll()
                  .typeString('Simple Web Design')
                  .start()
              }}
            />
          </p>
        </div>
        <div className="connect-button">
          <a href="https://www.github.com/kerimkaraman" target='blank'>CONNECT WITH ME</a>
        </div>
      </section>
      <section className='works-area'>
        <h1>Works</h1>
        <p>Check out some of my projects</p>
        <div className="works-items">
          <WorkCard
            projectName='The Movie Database'
            react={true}
            html={true}
            css={true}
            js={true}
            github='https://github.com/kerimkaraman/The-Movie-Database-API-Application'
            livedemo='https://themoviedatabase-kerimkaraman.netlify.app'
          />

          <WorkCard
            projectName='REST Countries'
            react={true}
            html={true}
            css={true}
            js={true}
            github='https://github.com/kerimkaraman/REST-Countries'
            livedemo='https://restcountries-kerimkaraman.netlify.app'
          />
          <WorkCard
            projectName='Button Maker'
            react={true}
            html={true}
            css={true}
            js={true}
            github='https://github.com/kerimkaraman/Button-Maker'
            livedemo='https://buttonmaker-kerimkaraman.netlify.app'
          />
        </div>
        <div className='see-more-area'>
          <a href="https://www.github.com/kerimkaraman" target='blank'>See More...</a>
        </div>
      </section>
    </div>
  );
}
export default App;

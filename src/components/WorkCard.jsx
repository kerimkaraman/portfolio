import React from 'react';
import './workcard.css';
import '../App.css'
import ReactIcon from '../images/react.png';
import HTMLIcon from '../images/html.png';
import CSSIcon from '../images/css.png';
import JSIcon from '../images/js.png';

function WorkCard(props) {
    return (
        <div className='workcard'>
            <h2>{props.projectName}</h2>
            <div className="icons-area">
                <div className="icons-text"><h3>Techs:</h3></div>
                <div className='icons'>
                    {props.react ? <img src={ReactIcon} alt="" /> : null}
                    {props.html ? <img src={HTMLIcon} alt="" /> : null}
                    {props.css ? <img src={CSSIcon} alt="" /> : null}
                    {props.js ? <img src={JSIcon} alt="" /> : null}
                </div>
            </div>
            <div className="links-area">
                <a href={props.github} target='blank'>GitHub</a>
                <a href={props.livedemo} target='blank'>Live Demo</a>
            </div>
        </div>
    )
}

export default WorkCard
import React from 'react';
import './welcome.css'
import { PongSpinner } from 'react-spinners-kit'

function Welcome() {
    return (
        <div className='welcome-page'>
            <div className='welcome-wrapper'>
                <PongSpinner size={500} color='#000'/>
            </div>
        </div>
    )
}

export default Welcome
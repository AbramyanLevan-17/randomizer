import React from 'react';
import './index.scss';
import RandomButton from './RandomButton';
import Tutorial from './Tutorial';

const Randomizer = () => {
    return (
        <div className='randomizer'>
            <div className='randomizer-wrapper'>
                <Tutorial/>
                <RandomButton/>
            </div>
        </div>
    )
}

export default Randomizer

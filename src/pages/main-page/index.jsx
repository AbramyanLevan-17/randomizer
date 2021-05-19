import React from 'react';
import './index.scss';
import Randomizer from '../../components/randomizer/index';
import Tabs from '../../components/tabs/index';

const MainPage = () => {
    return (
        <div className='main'>
            <Randomizer/>
            <Tabs/>
        </div>
    )
}

export default MainPage;

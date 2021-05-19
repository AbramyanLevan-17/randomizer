import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './index.scss';
import Search from './Search';

const TabPage = () => {
    return (
        
        <div className='tabs'>
        <div className='tabs-title'>Didn't Find Anything Suitable?</div>
        <div className='tabs-description'>Try to generete the recipe</div>
        <Tabs>
        <TabList>
          <Tab>Find by Recipes</Tab>
          <Tab>Find by Ingridients</Tab>
          <Tab>Find by Name</Tab>
        </TabList>
    
        <TabPanel>
          <div className='tabs-wrapper'>1</div>
        </TabPanel>
        <TabPanel>
        <div className='tabs-wrapper'>2</div>
        </TabPanel>
        <TabPanel>
        <div className='tabs-wrapper'>
            <Search/>
        </div>
        </TabPanel>
      </Tabs>
      </div>
    )
}

export default TabPage

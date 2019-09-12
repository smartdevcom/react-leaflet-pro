import React, { Component } from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import PropertySearchTab from './PropertySearchTab';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';
import './Sidebar.css';
import history from '../history';

export default class Sidebar extends Component {
   constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
   }

   change = activeIndex => () => {
      this.setState({ activeIndex });
      history.push(activeIndex === 0 ? '/search/suburb' : '/my-properties');
   };

   handleActiveIndexUpdate = activeIndex => this.setState({ activeIndex });

   render() {
      const { activeIndex } = this.state;
      return (
         <div className='Sidebar'>
            <TabBar
               activeTabIndex={activeIndex}
               activeIndex={activeIndex}
               handleActiveIndexUpdate={this.handleActiveIndexUpdate}
            >
               <Tab onClick={this.change(0)}>
                  <span className='Sidebar__tab--label'>Search</span>
               </Tab>
               <Tab onClick={this.change(1)}>
                  <span className='Sidebar__tab--label'>My Properties</span>
               </Tab>
            </TabBar>
            {activeIndex === 0 && <PropertySearchTab></PropertySearchTab>}
            {activeIndex === 1 && <div>index 1</div>}
         </div>
      );
   }
}

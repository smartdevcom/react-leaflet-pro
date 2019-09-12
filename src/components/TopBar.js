import React, { Component } from 'react';

import TopAppBar, {
   TopAppBarFixedAdjust,
   TopAppBarIcon,
   TopAppBarRow,
   TopAppBarSection,
   TopAppBarTitle
} from '@material/react-top-app-bar';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

import './TopBar.css';

const TopBar = ({ onClick }) => {
   return (
      <div className='TopBar'>
         <header className='mdc-top-app-bar mdc-top-app-bar--dense'>
            <TopAppBarRow>
               <TopAppBarSection align='start'>
                  <button className='material-icons mdc-top-app-bar__navigation-icon mdc-icon-button'>menu</button>
                  <TopAppBarTitle>Miami, FL</TopAppBarTitle>
               </TopAppBarSection>
               <TopAppBarSection align='end' role='toolbar'>
                  <TopAppBarIcon actionItem tabIndex={0}>
                     <MaterialIcon
                        aria-label='print page'
                        hasRipple
                        icon='print'
                        onClick={() => console.log('print')}
                     />
                  </TopAppBarIcon>
               </TopAppBarSection>
            </TopAppBarRow>
         </header>
      </div>
   );
};

export default TopBar;

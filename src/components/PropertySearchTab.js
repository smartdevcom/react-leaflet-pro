import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
// import { connect } from 'react-redux';
import history from '../history';
import Radio, { NativeRadioControl } from '@material/react-radio';
import './PropertySearchTab.css';
import '@material/react-radio/dist/radio.css';

export default class PropertySearchTab extends Component {
   constructor(props) {
      super(props);
      this.state = { searchOption: null };
   }

   change = index => e => {
      console.log(e.target.value, index);
      this.setState({ searchOption: e.target.value });
      // history.push(index === 0 ? '/search/suburb' : '/search/address');
   };

   render() {
      return (
         <div>
            <Radio label='By Suburb' key='suburb'>
               <NativeRadioControl name='searchOption' value='suburb' id='suburb' onChange={this.change(0)} checked />
            </Radio>
            <Radio label='By Address' key='address'>
               <NativeRadioControl name='searchOption' value='address' id='address' onChange={this.change(1)} />
            </Radio>
         </div>
      );
   }
}

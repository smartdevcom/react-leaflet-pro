import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
// import { connect } from 'react-redux';
import history from '../history';
import Radio, { NativeRadioControl } from '@material/react-radio';
import './PropertySearchTab.css';
import '@material/react-radio/dist/radio.css';
// import { getSuburbs, getSuburb, getZones } from '../api/suburbsApi';
// import { suggestAddress, findProperties, getAddress, exportAllProperties } from '../api/propertyApi';
import { SuburbsItem, AddressItem, Menu } from './SuburbsSelect';

export default class PropertySearchTab extends Component {
   constructor(props) {
      super(props);
      this.state = {
         //search option select
         searchOption: null,
         openSearchOption: 'suburb',
         //autocomplete
         error: false,
         addressInput: '',
         addressList: [],
         address: null,
         suburbs: [],
         suburbInput: ''
      };
      console.log(window.location.pathname);
   }

   componentDidMount() {
      if (window.location.pathname === '/' || window.location.pathname === '/search/suburb') {
         this.setState({ openSearchOption: 'suburb' });
      } else {
         this.setState({ openSearchOption: 'address' });
      }
   }

   change = index => e => {
      console.log(window.location.pathname);
      this.setState({ searchOption: e.target.value });
      history.push(index === 0 ? '/search/suburb' : '/search/address');
   };

   selectAddress = (addressInput, item) => {
      this.setState({
         error: false,
         addressInput: item.address.trim(),
         addressList: [item]
      });
      // getAddress({ id: item.id }).then(result => {
      //    if (!result.success) {
      //       return this.setState({
      //          error: { message: 'Sorry, no property found for this address.' }
      //       });
      //    }
      //    this.setState({ error: false, address: result.data && result.data.id });
      // });
   };

   changeSuburb = (event, suburbInput) => {
      this.setState({ suburb: null, suburbInput });
   };

   selectSuburb = (suburbInput, item) => {
      console.log(item);
      this.setState({
         suburbInput: `${item.localityName}`,
         suburbs: [item],
         zoneInput: '',
         zones: [],
         zone: null
      });
      history.push('/search/suburb/kedron');
      this.props.onSearch([]);
   };

   render() {
      const { openSearchOption, suburbs, suburbInput } = this.state;
      console.log(suburbs);
      console.log(openSearchOption);
      return (
         <div>
            {openSearchOption === 'suburb' && (
               <>
                  <Radio label='By Suburb' key='suburb'>
                     <NativeRadioControl
                        name='searchOption'
                        value='suburb'
                        id='suburb'
                        onChange={this.change(0)}
                        checked
                     />
                  </Radio>
                  <Radio label='By Address' key='address'>
                     <NativeRadioControl name='searchOption' value='address' id='address' onChange={this.change(1)} />
                  </Radio>
                  <div class='row' style={{ padding: 10 }}>
                     <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div class='box' style={{ marginBottom: 10 }}>
                           <label>Suburb:</label>
                        </div>
                     </div>
                     <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div class='box'>
                           <Autocomplete
                              inputProps={{
                                 className: 'autocomplete__input'
                              }}
                              wrapperProps={{
                                 className: 'autocomplete__wrapper'
                              }}
                              value={suburbInput}
                              items={suburbs}
                              getItemValue={item => item.localityName}
                              onSelect={this.selectSuburb}
                              onChange={this.changeSuburb}
                              renderMenu={Menu}
                              renderItem={SuburbsItem}
                              autoHighlight
                           />
                        </div>
                     </div>
                  </div>
               </>
            )}
            {openSearchOption === 'address' && (
               <>
                  <Radio label='By Suburb' key='suburb'>
                     <NativeRadioControl name='searchOption' value='suburb' id='suburb' onChange={this.change(0)} />
                  </Radio>
                  <Radio label='By Address' key='address'>
                     <NativeRadioControl
                        name='searchOption'
                        value='address'
                        id='address'
                        onChange={this.change(1)}
                        checked
                     />
                  </Radio>
               </>
            )}
         </div>
      );
   }
}

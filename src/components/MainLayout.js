import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Resizable } from 're-resizable';

import TopBar from './TopBar';
import * as actions from '../actions';
import './MainLayout.css';

const getMaxWidth = () => window.innerWidth / 2;

class MainLayout extends React.Component {
   constructor(props) {
      super(props);
      console.log(' props.app.asideWidth', props.app.asideWidth);
      this.state = {
         basemap: 'satellite'
      };
   }
   componentDidMount() {
      const { L } = window;
      this.map = L.map('map').setView([51.505, -0.09], 13);
      L.gridLayer
         .googleMutant({
            type: 'satellite' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
         })
         .addTo(this.map);
      // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //   attribution:
      //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // }).addTo(this.map);
   }
   changeBasemap(basemap) {
      this.setState({ basemap });
   }
   stopAsideResize = (e, direction, ref, d) => {
      this.map.invalidateSize(true);
      this.props.updateApp({
         asideWidth: this.props.app.asideWidth + d.width
      });
   };
   toggleLeftColumn = () => {
      // console.log("onClick", this.props.updateAppAction);

      this.props
         .updateApp({
            closedAside: !this.props.app.closedAside
         })
         .then(() => {
            this.map.invalidateSize(true);
         });
   };
   render() {
      const { leftColumn, rightColumn, topBar } = this.props;
      const { asideWidth = 400, closedAside = false } = this.props.app;
      const asideWidthValue = closedAside ? 0 : asideWidth;
      console.log('this.props', this.props);
      return (
         <div style={{ display: 'flex' }}>
            <Resizable
               className='MainLayout__left-column'
               maxWidth={getMaxWidth()}
               minWidth={0}
               enable={{ right: true }}
               size={{ width: asideWidthValue, height: '100vh' }}
               onResizeStop={this.stopAsideResize}
            >
               {leftColumn}
            </Resizable>
            <div className='MainLayout__right-column'>
               <div className='MainLayout__topBar'>
                  <TopBar onClick={this.toggleLeftColumn} />
               </div>
               <div className='MainLayout__body'>
                  <div className='MainLayout__map' id='map' />
                  <div className='MainLayout__overlay'>{rightColumn}</div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = ({ app, myProperties, searchForm, map }) => ({
   app,
   myProperties,
   map,
   searchForm
});

const actionCreators = {
   updateApp: actions.updateAppThunk
};

export default connect(
   mapStateToProps,
   actionCreators
)(MainLayout);

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import MainLayout from '../components/MainLayout';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';

import './Home.css';

class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   toggleLeftColumn = () => {
      console.log('onClick');
      this.props.updateAppState({
         asideWidth: this.props.app.asideWidth > 0 ? 0 : 400
      });
   };
   render() {
      return (
         <MainLayout
            leftColumn={<Sidebar></Sidebar>}
            rightColumn='ddd'
            // topBar={<TopBar onClick={this.toggleLeftColumn} />}
         />
      );
   }
}

const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = {
   updateApp: actions.updateAppThunk
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Home);

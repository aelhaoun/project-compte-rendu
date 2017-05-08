import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MeetingList from '../components/project/MeetingList';
import MeetingDetail from '../components/project/MeetingDetail';
import ProjectInformation from '../components/project/ProjectInformation';
import HeaderBlock from '../components/project/HeaderBlock'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

import {Card} from 'material-ui/Card';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.previewState;
  }

  render() {
    let isClosed = this.props.isClosed;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header />
            <div className='main-container'>
              <ProjectInformation />
              <div className="flex-container">
                {!this.props.isFullScreen && 
                <div className={"flex-1-container " + (isClosed ?  "" : "padding-right")}>
                  <MeetingList />
                </div>}

                {!isClosed && 
                <div className="flex-2-container padding-top">
                  <Card>
                    <HeaderBlock />
                    <MeetingDetail />
                  </Card>
                </div>}
                
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {

};

function mapStateToProps(state) {
  return {
      isClosed: state.previewState.isClosed,
      isFullScreen: state.previewState.isFullScreen
  };
}



export default connect(
  mapStateToProps
)(App);

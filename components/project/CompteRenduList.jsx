import React from 'react';
import { connect } from 'react-redux';

import * as types from '../../constants/CompteRenduTypes';

import {List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import QuestionIcon from 'material-ui/svg-icons/action/help';
import InfoIcon from 'material-ui/svg-icons/action/info';
import DecisionIcon from 'material-ui/svg-icons/action/gavel';

class CompteRenduList extends React.Component {

  render() {
    let compteRenduList = this.props.compteRenduList || [];
    return (
      <List>
        {compteRenduList.length > 0 && compteRenduList.map( (row, index) => (
          <div 
            key={index} 
            className='flex-container compte-rendu-item verical-center'
          >
            <Avatar icon={
              row.type === types.INFORMATION && <InfoIcon />
              || row.type === types.QUESTION && <QuestionIcon />
              || row.type === types.DECISION && <DecisionIcon />
            } />
            <p className="padding-left">{row.text}</p>
          </div>
        ))}
        
        {compteRenduList.length === 0 && <p>Aucun compte rendu enregistés</p>}

      
      </List>
    );
  }
}

CompteRenduList.propTypes = {
  compteRenduList: React.PropTypes.array
}

function mapStateToProps(state) {
  return {
    compteRenduList: state.meeting.comptesRendus
  };
}

export default connect(mapStateToProps)(CompteRenduList);
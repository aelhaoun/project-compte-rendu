import React from 'react';
import { connect } from 'react-redux';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui/svg-icons/social/person';

class ParticipantList extends React.Component {

  render() {
    let participantList = this.props.participantList || [];
    return (
      <List>
        {participantList.length > 0 && participantList.map( (row, index) => (
          <ListItem
            key={index}
            leftAvatar={<Avatar icon={<PersonIcon />} />}
            primaryText={row.name}
            secondaryText={row.email}
          />
        ))}
        {participantList.length === 0 && <p>Aucun participant enregistré</p>}
      </List>
    );
  }
}

ParticipantList.propTypes = {
  participantList: React.PropTypes.array
}

function mapStateToProps(state) {
  return {
    participantList: state.meeting.participants
  };
}

export default connect(mapStateToProps)(ParticipantList);
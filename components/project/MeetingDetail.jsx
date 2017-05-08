import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ParticipantList from './ParticipantList';
import CompteRenduList from './CompteRenduList';
import dateformat from 'dateformat';

class MeetingDetail extends Component {
  	constructor(props, context) {
    	super(props, context);
    	this.state = { };
  	}

  	render() {
		let meeting = this.props.meeting;
	    return (
	    	<div className="padding-left">
				<div>
					<b>Date de creation : </b>
					<span>{dateformat(meeting.date, 'isoDate')}</span>
				</div>
				<div>
					<b>Lieu : </b>
					<span>{meeting.place}</span>
				</div>

				<div className="flex-container padding-right">
					<div className="flex-1-container">
						<h3 className="margin-left">List des participants</h3>
						<ParticipantList />
					</div>
					<div className="flex-1-container">
						<h3 className="margin-left">List des comptes rendus</h3>
						<CompteRenduList />
					</div>
				</div>
			</div>
	    );
  	}
}

MeetingDetail.propTypes = {
  	meeting: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    meeting: state.meeting
  };
}

export default connect(mapStateToProps)(MeetingDetail);
import React from 'react';
import { connect } from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card} from 'material-ui/Card';
import dateformat from 'dateformat';

import { getMeetingList, displayDetailMeeting, openMeetingPreview} from '../../actions/projectActions';
class MeetingList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showRowHover: true,
      selectable: true,
      showCheckboxes: false
    };

    this.displayDetail = this.displayDetail.bind(this);
  }

  displayDetail(e) {
    let meetingList = this.props.meetingList;
    this.props.displayDetailMeeting(meetingList[e]);
    this.props.openMeetingPreview();
  }
    
  handleChange = (event, index, value) => this.setState({value});

  componentWillMount() {
    this.props.getMeetingList();
  }

  render() {
    let meetingList = this.props.meetingList || []; 
    let displayDetailMeeting = this.props.displayDetailMeeting;
    return (
      <Card className='list-container'>
        <Table
          height={this.state.height}
          selectable={this.state.selectable}
          onRowSelection={this.displayDetail}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="La date">Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="Le lieu">Lieu</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            showRowHover={this.state.showRowHover}
          >
            {meetingList.length > 0 && meetingList.map( (row, index) => (
              <TableRow 
                key={index}
                className="cursor-pointer"
                selectable={this.state.selectable}
              >
                <TableRowColumn>{dateformat(row.date, 'isoDate')}</TableRowColumn>
                <TableRowColumn>{row.place}</TableRowColumn>
              </TableRow>
            ))}
            {meetingList.length === 0 && 
              <TableRow >
                <TableRowColumn>Aucune réunion réalisée</TableRowColumn>
              </TableRow>}
          </TableBody> 
          
        </Table>
      </Card>
    );
  }
}

MeetingList.propTypes = {
  getMeetingList: React.PropTypes.func.isRequired,
  meetingList: React.PropTypes.array,
  displayDetailMeeting: React.PropTypes.func.isRequired,
  openMeetingPreview: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    meetingList: state.meetingList
  };
}

export default connect(mapStateToProps, 
    {getMeetingList, displayDetailMeeting, openMeetingPreview})(MeetingList);
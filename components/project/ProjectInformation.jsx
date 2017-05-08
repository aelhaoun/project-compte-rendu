import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

import {Card, CardTitle, CardText} from 'material-ui/Card';

import { getProject } from '../../actions/projectActions';


class ProjectInformation extends Component {
  	constructor(props, context) {
    	super(props, context);
    	this.state = { };
  	}

	componentWillMount() {
		this.props.getProject();
	}

  	render() {
		let project = this.props.project;
	    return (
		    <Card>
			    <CardTitle title={project.name} subtitle={
			    	<span>
			    		<b>{project.company_name}</b>
			    		<br />
			    		<span>{dateformat(project.start_date, 'isoDate')}</span>
			    	</span>
			    } 
			    />
			    <CardText>
			      	{project.description}
			    </CardText>
		  	</Card>
	    );
  	}
}

ProjectInformation.propTypes = {
	getProject: React.PropTypes.func.isRequired,
  	project: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    project: state.project
  };
}

export default connect(mapStateToProps, {getProject})(ProjectInformation);
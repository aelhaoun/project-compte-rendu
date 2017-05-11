import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';


import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import FullScreenIcon from 'material-ui/svg-icons/navigation/fullscreen';
import FullScreenExitIcon from 'material-ui/svg-icons/navigation/fullscreen-exit';


import { closeMeetingPreview, toggleFullScreenPreview } from '../../actions/projectActions';

class HeaderPreview extends Component {
	constructor(props) {
	    super(props);

	    this.onClose = this.onClose.bind(this);
	    this.onToggleFullScreenPreview = this.onToggleFullScreenPreview.bind(this);
	}

  	onClose(e) {
    	this.props.closeMeetingPreview(false);
  	}

  	onToggleFullScreenPreview(e) {
  		this.props.toggleFullScreenPreview();
  	}
	  
	render() {
		let previewState = this.props.previewState;
	    return (
	      <div className="flex-container padding-left space-beween verical-center">
	        <h1>Details de la réunion </h1>
	        <div>

			    {!previewState.isFullScreen &&	
			    <IconButton onClick={this.onToggleFullScreenPreview}>
			        <FullScreenIcon />
			    </IconButton>}

				{previewState.isFullScreen &&
			    <IconButton onClick={this.onToggleFullScreenPreview}>
			        <FullScreenExitIcon/>
			    </IconButton>}

			   	<IconButton onClick={this.onClose}>
			        <CloseIcon />
			    </IconButton>

			</div>
	      </div>
	    );
	}
}

HeaderPreview.propTypes = {
	closeMeetingPreview: React.PropTypes.func.isRequired,
	toggleFullScreenPreview: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
  	previewState: state.previewState
  };
}

export default connect(mapStateToProps, {closeMeetingPreview, toggleFullScreenPreview})(HeaderPreview);

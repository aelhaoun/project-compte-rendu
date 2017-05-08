import { DISPLAY_MEETING_DETAIL } from '../constants/ActionTypes';

const initialState = {};

export default function projectReducer(state = initialState, action) {
	switch (action.type) {

	case DISPLAY_MEETING_DETAIL:
		let meeting = action.meeting || state;
		return meeting;

	default:
	    return state;
	}
}

import { GET_MEETING_LIST } from '../constants/ActionTypes';

const initialState = [];

export default function projectReducer(state = initialState, action) {
	switch (action.type) {

	case GET_MEETING_LIST:
		return action.meetingList

	default:
	    return state;
	}
}

import { GET_PROJECT } from '../constants/ActionTypes';

const initialState = {};

export default function projectReducer(state = initialState, action) {
	switch (action.type) {
		
	case GET_PROJECT:
	    return action.project;

	default:
	    return state;
	}
}

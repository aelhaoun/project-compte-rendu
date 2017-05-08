import { CLOSE_PREVIEW, TOGGLE_FULL_SCREEN, OPEN_PREVIEW } from '../constants/ActionTypes';

const initialState = {
	isClosed: true,
	isFullScreen: false
};

export default function projectReducer(state = initialState, action) {
	switch (action.type) {
		
	case CLOSE_PREVIEW:
	    return Object.assign({}, state, { 
	    	isClosed: true, 
	    	isFullScreen: false 
	    });
	case OPEN_PREVIEW:
		return Object.assign({}, state, {
			isClosed: false
		});

	case TOGGLE_FULL_SCREEN:
		return Object.assign({}, state, { 
			isFullScreen: !state.isFullScreen 
		});
	default:
	    return state;
	}
}

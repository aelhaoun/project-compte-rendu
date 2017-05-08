import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import meetingListReducer from './meetingListReducer';
import meetingPreviewReducer from './meetingPreviewReducer';
import meetingDetailReducer from './meetingDetailReducer';

const rootReducer = combineReducers({
    project: projectReducer,
    meetingList: meetingListReducer,
    previewState: meetingPreviewReducer,
    meeting: meetingDetailReducer
});

export default rootReducer;

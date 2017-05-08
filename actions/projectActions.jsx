import * as types from '../constants/ActionTypes';

export function getProject() {
	return { 
	  	type: types.GET_PROJECT, 
	  	project : {
			name : 'My project',
			company_name : "Le nom de l'entreprise",
			description : 'Ceci est une description du projet, Ceci est une description du projet, Ceci est une description du projet, Ceci est une description du projet',
			start_date : 'Wed May 02 2017 23:09:22 GMT+0200 (CEST)'
		}
	};
}

export function getMeetingList() {
	return {
		type: types.GET_MEETING_LIST,
		meetingList: [{
		    date: 'Wed May 01 2017 23:09:22 GMT+0200 (CEST)',
		    place: 'Place of meeting N 1',
		    participants: [{
	    		name: 'John Smith',
	    		email: 'email1@mail.com'
		    }, {
		    	name: 'Nicolas Makenli',
		    	email: 'email2@mail.com'
		    }, {
		    	name: 'Nicolas Makenli',
		    	email: 'email2@mail.com'
		    }],
			comptesRendus: [{
				type: 'INFORMATION',
				text: 'Text pour une information'
			}, {
				type: 'QUESTION',
				text: 'Une question'
			}, {
				type: 'DECISION',
				text: 'une decision'
			}]

		  },{
		    date: 'Wed May 02 2017 23:09:22 GMT+0200 (CEST)',
		    place: 'Place of meeting N 2',
		    participants: [{
	    		name: 'John Smith',
	    		email: 'email1@mail.com'
		    }, {
		    	name: 'Nicolas Makenli',
		    	email: 'email2@mail.com'
		    }]
		  },{
		    date: 'Wed May 03 2017 23:09:22 GMT+0200 (CEST)',
		    place: 'Place of meeting N 3',
		    comptesRendus: [{
				type: 'INFORMATION',
				text: 'Text pour une information'
			}]
		  }]
	}
}

export function closeMeetingPreview () {
	return {
		type: types.CLOSE_PREVIEW
	}
}

export function openMeetingPreview() {
	return {
		type: types.OPEN_PREVIEW
	}
}

export function toggleFullScreenPreview (_isFullScreen) {
	return {
		type: types.TOGGLE_FULL_SCREEN
	}
}

export function displayDetailMeeting (_meeting) {
	return {
		type: types.DISPLAY_MEETING_DETAIL,
		meeting: _meeting
	}
}
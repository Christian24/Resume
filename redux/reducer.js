//Adapted from http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-2/
import {Map} from 'immutable';

function setState(state, newState) {
	return state.merge(newState);
}

export default function(state, action) {
	switch (action.type) {
		case 'SET_STATE':
			let copyState = Object.assign({}, action.state);
			copyState.notes = {};
			return copyState;

		case 'ADD_NOTE':
			let copy = Object.assign({}, state);
			let copiedNotes = Object.assign({},copy.notes);
			let value = copiedNotes[action.state];
			copiedNotes[action.state] = !value;
			copy.notes = copiedNotes;
			
			return copy;
	}
	return state;
}
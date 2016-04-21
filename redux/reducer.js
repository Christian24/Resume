//Adapted from http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-2/
import {Map} from 'immutable';

function setState(state, newState) {
	return state.merge(newState);
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'SET_STATE':
			return action.state;
	}
	return state;
}
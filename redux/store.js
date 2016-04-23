import { createStore } from 'redux'

import reducer from './reducer';

export default function configureStore(initialState) {
	const store = createStore(reducer, initialState, 
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
	return store;
}
export const store = configureStore( {currentResume:{}, person: {}, languages: {}, categories: {}, educations: {},
	technologies: {}, notes: {}, render: false});
 
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTools from '../DevTools'
import reducer from './reducer';
import {resumeEn, personalDetails, languagesData, categoriesData, educationsData, technologiesData} from "../resumeData";
export default function configureStore(initialState) {
	const store = createStore(reducer, initialState, 
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
	return store;
}
export const store = configureStore( {currentResume: resumeEn, person: personalDetails, languages: languagesData, categories: categoriesData, educations: educationsData, technologies: technologiesData, notes: {}});
 
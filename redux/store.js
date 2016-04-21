import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTools from '../DevTools'
import reducer from './reducer';
import {resumeEn, personalDetails, languagesData, categoriesData, educationsData, technologiesData, newResumeData} from "../resumeData";
export default function configureStore(initialState) {
	const store = createStore(reducer, initialState, 
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
	return store;
}
export const store = configureStore( {currentResume:newResumeData.resume, person: newResumeData.person, languages: newResumeData.languages, categories: newResumeData.categories, educations: educationsData,
	technologies: newResumeData.technologies, notes: newResumeData.notes});
 
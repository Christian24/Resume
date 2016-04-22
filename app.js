const React = require("react");
const ReactDOM = require("react-dom");
//const Resume = require("./resume.jsx");
//const Paper = require("./paper.jsx");
import {AppContainer} from "./app.jsx";
//const update = require("react-addons-update");
//import {List, Map} from 'immutable';
//import {compose,createStore} from 'redux';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
//import {resumeEn, personalDetails, languagesData, categoriesData, educationsData, technologiesData} from "./resumeData";
var Rebase = require('re-base');
var base = Rebase.createClass('https://chrisresume.firebaseio.com');
//Our store
//const store = createStore(reducer);
//Our initial state:
base.listenTo("resumes/en", {
	context: store,
	then(data) {
		store.dispatch({
			type: 'SET_STATE',
			state: data 
			});
	}
})

ReactDOM.render(
	<Provider store={store}>
	<AppContainer />
</Provider>
, document.getElementById("target"));

const React = require("react");
const ReactDOM = require("react-dom");
const Resume = require("./resume.jsx");
const Paper = require("./paper.jsx");
import {AppContainer} from "./app.jsx";
const update = require("react-addons-update");
import {List, Map} from 'immutable';
import {compose,createStore} from 'redux';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import {resumeEn, personalDetails, languagesData, categoriesData, educationsData, technologiesData} from "./resumeData";

//Our store
//const store = createStore(reducer);
//Our initial state:
//store.dispatch({
//	type: 'SET_STATE',
//	state: {
//		currentResume: {}, person: {}, languages: {}, categories: {}, educations: {}, technologies: {}
//	}
//})
store.dispatch({
	type: 'SET_STATE',
	state: {
		currentResume: resumeEn, person: personalDetails, languages: languagesData, categories: categoriesData, educations: educationsData, technologies: technologiesData, notes: {}
	}
});
//let App = React.createClass ({
//	getInitialState() {
//		return { resumes: {}, currentResume: {}, person: {}, languages: {}, categories: {}, educations: {}, notes: {}, technologies: {} };
//	},
//	loadData() {
//		//let resumes = require("./resumeData");
//		//let resumeCollection = {};
//		//let currentResumeVar;
//		//for(let resume in resumes) {

//		//resumeCollection[resume] = resumes[resume];
//		//currentResumeVar = resume;
//		//}
//		//let resumeEn = {
//		//	title: "Resume",
//		//	personalDetails: {
//		//		name: "Christian Siebmanns",
//		//		email: "christian.siebmanns@hotmail.de",
//		//		telephone: "+49 (0151) 2919-0609",
//		//		street: "Spiekerhof 2",
//		//		city: "Münster",
//		//		postal: "48143",
//		//		country: "Germany",

//		//	}
//		//};
		

//		let assigned = resumeEn;
		
//		this.setState({  currentResume: assigned, person: personalDetails, languages: languagesData, categories: categoriesData, educations: educationsData, technologies: technologiesData}, function() {
		
//		});
//		//update(currentResume, {personalDetails: $set:{personalDetails}});
		
//	},
//	getCurrentResume() {
//		//console.log(this.props.currentResume);
//		return this.state.currentResume;
//	},

//	componentDidMount() {
//		this.loadData();
		
//	},
//	changeNotes(text) {
//		let value=	this.state.notes[text];
//		let obj = this.state.notes;
//		let temp = obj.constructor(); // give temp the original obj's constructor
//		for (let key in obj) {
//			temp[key] = cloneObject(obj[key]);
//		}
//		temp[text] = !value;
//		this.setState({notes: temp});
 
		
//	},
//	render() {
//		return (<div className="container">
//			<div className="col-md-2">Test</div>
//				<div className="col-md-8">
//			<Resume currentResume={this.state.currentResume} person={this.state.person} languages={this.state.languages} 
//			categories={this.state.categories} educations={this.state.educations} technologies={this.state.technologies} /></div>
//			<div className="col-md-2">
//				<Paper notes= {this.state.notes} />
//				</div></div>);
//}
//});
ReactDOM.render(
	<Provider store={store}>
	<AppContainer />
</Provider>
, document.getElementById("target"));

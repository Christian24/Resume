const React = require("react");
const ReactDOM = require("react-dom");
const Resume = require("./resume.jsx");
const update = require("react-addons-update");
import {resumeEn, personalDetails, languagesData, categoriesData, educationsData} from "./resumeData";

let App = React.createClass ({
	getInitialState() {
		return { resumes: {}, currentResume: {}, person: {}, languages: {}, categories: {}, educations: {} };
	},
	loadData() {
		//let resumes = require("./resumeData");
		//let resumeCollection = {};
		//let currentResumeVar;
		//for(let resume in resumes) {

		//resumeCollection[resume] = resumes[resume];
		//currentResumeVar = resume;
		//}
		//let resumeEn = {
		//	title: "Resume",
		//	personalDetails: {
		//		name: "Christian Siebmanns",
		//		email: "christian.siebmanns@hotmail.de",
		//		telephone: "+49 (0151) 2919-0609",
		//		street: "Spiekerhof 2",
		//		city: "M�nster",
		//		postal: "48143",
		//		country: "Germany",

		//	}
		//};
		

		let assigned = resumeEn;
		
		this.setState({  currentResume: assigned, person: personalDetails, languages: languagesData, categories: categoriesData, educations: educationsData}, function() {
			console.log(this.state.languages.french.name);
		});
		//update(currentResume, {personalDetails: $set:{personalDetails}});
		
	},
	getCurrentResume() {
		//console.log(this.props.currentResume);
		return this.state.currentResume;
	},

	componentDidMount() {
		this.loadData();
		
	},

	render() {
		return (<div><Resume currentResume={this.state.currentResume} person={this.state.person} languages={this.state.languages} categories={this.state.categories} educations={this.state.educations} /></div>);
}
});
ReactDOM.render(<App />, document.getElementById("target"));

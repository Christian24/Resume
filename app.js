const React = require("react");
const ReactDOM = require("react-dom");
const Resume = require("./resume.jsx");
const update = require("react-addons-update");
import {resumeEn, personalDetails} from "./resumeData";

let App = React.createClass ({
	getInitialState() {
		return { resumes: {}, currentResume: {}, person: {} };
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
		//		city: "Münster",
		//		postal: "48143",
		//		country: "Germany",

		//	}
		//};
		

		let assigned = resumeEn;
		console.log(assigned.personalDetails.email);

		this.setState({  currentResume: assigned, person: personalDetails });
		//update(currentResume, {personalDetails: $set:{personalDetails}});
		console.log(this.state.currentResume);
	},
	getCurrentResume() {
		//console.log(this.props.currentResume);
		return this.state.currentResume;
	},

	componentDidMount() {
		this.loadData();
		console.log(this.state.currentResume);
	},

	render() {
		return (<div><Resume currentResume={this.state.currentResume} person={this.state.person} /></div>);
}
});
ReactDOM.render(<App />, document.getElementById("target"));

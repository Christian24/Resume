const React = require("react");
const Resume = require("./resume.jsx");

const Paper = require("./paper.jsx");
import {connect} from 'react-redux';

export class App extends React.Component {
	
	
	render() {
		
		return (<div className="container-fluid">
			<div className="col-md-2">Test</div>
				<div className="col-md-8">
			<Resume currentResume={this.props.currentResume} person={this.props.person} languages={this.props.languages} 
		categories={this.props.categories} educations={this.props.educations} technologies={this.props.technologies} /></div>
		<div className="col-md-2">
			<Paper text={this.props.currentResume.notes} />
	
			</div></div>);
	}
}
function mapStateToProps(state) {
	
	//return {
	//	currentResume: state.get('currentResume'),
	//	person: state.get('person'),
	//	languages: state.get('languages'),
	//	categories: state.get('categories'),
	//	educations: state.get('educations'),
	//	technologies: state.get('technologies'),
	//	//state.toObject();
	//};
	return state;
}
export const AppContainer = connect(mapStateToProps)(App);
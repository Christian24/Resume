const React = require("react");
const Resume = require("./resume.jsx");

const Paper = require("./paper.jsx");
import {connect} from 'react-redux';
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
export class App extends React.Component {
	
	
	render() {
	
		console.log(this.context.store.getState());
		
		return (<div className="container-fluid">
			<div className="col-md-2"></div>
				<div className="col-md-8">
	<ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={500} transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			<Resume key="resume" currentResume={this.props.currentResume} person={this.props.person} languages={this.props.languages} 
		categories={this.props.categories} educations={this.props.educations} technologies={this.props.technologies} />
		</ReactCSSTransitionGroup>
		</div>
		
	<div className="col-md-2">
<ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={500} transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
		<Paper key="notes" text={this.props.currentResume.notes} />
</ReactCSSTransitionGroup>
		</div></div>);
	}
	
}
App.contextTypes = {
	store: React.PropTypes.object
};
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
const React = require("react");
const Resume = require("./resume.jsx");

const Paper = require("./paper.jsx");
import {connect} from 'react-redux';
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
export class App extends React.Component {
	constructor(props) {
		super(props);
		
		//this.handleClick = this.handleClick.bind(this);
	}
	componentDidUpdate() {
	
	
		if(this.props.render == false) {
			this.context.store.dispatch({
				type: "SHOW",
				state: true
			});
		}
	}
	render() {
	
		
		return (<div className="container-fluid">
	<div className="row">
		<div className="col-md-2" />
		<div className="col-md-8">
			<div className="paper">
			<p className="text-center">This is a small demo project I made to learn React and Redux. Also uses some ES6, Webpack, animation, css and others. The JSON data itself comes from Firebase. You can click on any skill or technology to add it to your notes. Clicking on the item again removes an item from the list again.<br/><br/>The code is available on <a href="https://github.com/Christian24/Resume">GitHub</a>.
		</p>
		</div>
			</div>
	</div>
	{(() => { if(this.props.render) {
		return (<div className="row">
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
		</div>
	
	</div>);
}
else {
    return (<div className="row">
	<ReactCSSTransitionGroup transitionAppear={true}  transitionName="fade" transitionAppearTimeout={500} transitionLeaveTimeout={300}  transitionEnterTimeout={500}>
						<div className="col-md-12 paper" key="loading">

	<p className="lead text-center">Loading data please wait...</p>
						</div>
		</ReactCSSTransitionGroup>
</div>);
}
	})()}
	</div>);
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
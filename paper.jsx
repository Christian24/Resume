let React = require("react");
let Heading = require("./heading.jsx");
let Note = require("./note.jsx");
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import { connect } from 'react-redux';
class Paper extends React.Component {
	constructor(props) {
		super(props);
		this.renderNote = this.renderNote.bind(this);
	}
	renderNote(key) {
		if (this.props.notes[key]) {
			
		return (<Note text={key } key={key} />);
	}
	}
	render() {
	
		return (<div className="paper">
	<Heading title={this.props.text} />
	<ul className="list-unstyled">
		 <ReactCSSTransitionGroup transitionName="note" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
		 	{Object.keys(this.props.notes).map(this.renderNote)}
			 </ReactCSSTransitionGroup>
</ul>
	</div>);
	}
};
function mapStateToProps(state) {
	
	return {notes: state.notes};

}
Paper.contextTypes = {
	store: React.PropTypes.object
};
module.exports = connect(mapStateToProps)(Paper);
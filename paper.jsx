let React = require("react");
let Heading = require("./heading.jsx");
let Note = require("./note.jsx");
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
	<Heading title="Notes" />
	<ul className="list-unstyled">
		{Object.keys(this.props.notes).map(this.renderNote)}
	</ul>
	</div>);
	}
};
function mapStateToProps(state) {
	console.log(state.notes);
	return {notes: state.notes};

}
Paper.contextTypes = {
	store: React.PropTypes.object
};
module.exports = connect(mapStateToProps)(Paper);
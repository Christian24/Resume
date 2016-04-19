let React = require("react");
let Heading = require("./heading.jsx");
let Note = require("./note.jsx");
module.exports = class Paper extends React.Component {
	constructor(props) {
		super(props);
		this.renderNote = this.renderNote.bind(this);
	}
	renderNote(key) {
		return (<Note text={this.props.notes[key]} />);
	}
	render() {
		return (<div className="paper">
	<Heading title="Notes" />
	<ul>
		{Object.keys(this.props.notes).map(this.renderNote)}
	</ul>
	</div>);
	}
};
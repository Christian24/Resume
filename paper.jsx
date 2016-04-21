let React = require("react");
let Heading = require("./heading.jsx");
let Note = require("./note.jsx");
module.exports = class Paper extends React.Component {
	constructor(props) {
		super(props);
		this.renderNote = this.renderNote.bind(this);
	}
	renderNote(key) {
		if (this.props.notes[key]) {
			console.log(key);
		return (<Note text={key } />);
	}
	}
	render() {
		console.log(this.props.notes);
		return (<div className="paper">
	<Heading title="Notes" />
	<ul>
		{Object.keys(this.props.notes).map(this.renderNote)}
	</ul>
	</div>);
	}
};
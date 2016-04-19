let React = require("react");
let Heading = require("./heading.jsx");
module.exports = class Note extends React.Component {

	render() {
		return (<li> {this.props.text}</li>);
	}
};
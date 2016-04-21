let React = require("react");
let Heading = require("./heading.jsx");
module.exports = class Note extends React.Component {

	render() {
		return (<li className="paper paper-yellow"> {this.props.text}</li>);
	}
};
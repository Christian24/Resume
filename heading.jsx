let React = require("react");
module.exports = class Heading extends React.Component {

	render() {
		return (<h3>{this.props.title}</h3>);
	}
};
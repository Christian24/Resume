let React = require("react");
module.exports = class Description extends React.Component {

	render() {
		return (<li>{this.props.text}</li>);
	}
};
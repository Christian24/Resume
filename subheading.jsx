let React = require("react");
module.exports = class Subheading extends React.Component {

	render() {
		return 		(<p><strong>{this.props.first}</strong>, <u>{this.props.second}</u> </p>);
	}
};
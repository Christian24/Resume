let React = require("react");
module.exports = class SmallHeading extends React.Component {

	render() {
		return (<i>{this.props.title}</i>);
	}
};
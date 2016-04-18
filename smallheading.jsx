let React = require("react");
module.exports = class SmallHeading extends React.Component {

	render() {
		return (<p className="technology-heading">{this.props.title}</p>);
	}
};
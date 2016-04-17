let React = require("react");
module.exports = class Language extends React.Component {
	render() {
		return (<li>{this.props.details.name} ({this.props.details.description})</li>);
		}
};
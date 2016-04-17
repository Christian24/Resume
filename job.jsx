let React = require("react");
module.exports = class Job extends React.Component {
	render() {
		return (
		<div>
		<h4>{this.props.details.role}, {this.props.details.company} </h4>

		</div>
		);
	}
};

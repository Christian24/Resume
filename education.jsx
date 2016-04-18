let React = require("react");
let Subheading = require("./subheading.jsx");
module.exports = class Education extends React.Component {

	render() {
		return (
		<div>
		<Subheading first={this.props.details.degree} second={this.props.details.college} />
		</div>
		);
	}
};
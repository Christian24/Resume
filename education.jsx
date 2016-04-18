let React = require("react");
let Subheading = require("./subheading.jsx");
let Description = require("./description.jsx");
module.exports = class Education extends React.Component {

	render() {
		return (
		<div>
		<Subheading first={this.props.details.degree} second={this.props.details.college} text={this.props.details.text} />
			<ul>
				<Description  text={this.props.details.additional}  />
			</ul>
		</div>
		);
	}
};
let React = require("react");
module.exports = class Education extends React.Component {

	render() {
		return (<div><h5>
	{this.props.details.degree}, {this.props.details.college}
	</h5></div>);
	}
};
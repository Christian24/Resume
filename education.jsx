let React = require("react");
module.exports = class Education extends React.Component {

	render() {
		return (<div><h4>
	{this.props.details.degree}, {this.props.details.college}
	</h4></div>);
	}
};
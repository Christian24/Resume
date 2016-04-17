let React = require("react");
module.exports = class ResumeHeader extends React.Component {
	render() {
		return (<div>
	<h1>{this.props.title} {this.props.person.name}  </h1>
	<p>{this.props.person.address } {this.props.person.postal} {this.props.person.city}, {this.props.person.country}|</p>
	</div>);
	}
}
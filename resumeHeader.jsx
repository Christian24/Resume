let React = require("react");
module.exports = class ResumeHeader extends React.Component {
	render() {
		return (<div>
	<h1>{this.props.title} {this.props.person.name}  </h1>
	<ul className="list-inline">
	<li>	{this.props.person.address} {this.props.person.postal} {this.props.person.city}, {this.props.person.country}</li>
		<li> <a href="tel:{this.props.person.telephone}">{this.props.person.telephone}</a> </li>
		<li> <a href="mailto:{this.props.person.email}">{this.props.person.email}</a></li>
		
	</ul>

	</div>);
	}
}
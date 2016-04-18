let React = require("react");
module.exports = class ResumeHeader extends React.Component {
	render() {
		return (<div>
	<h2>{this.props.title} {this.props.person.name}  </h2>
	<ul className="list-inline">
	<li>	<span className="glyphicon glyphicon-home" aria-hidden="true"></span> {this.props.person.address} {this.props.person.postal} {this.props.person.city}, {this.props.person.country}</li>
		<li>		<span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> <a href="tel:{this.props.person.telephone}">{this.props.person.telephone}</a> </li>
		<li>		<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> <a href="mailto:{this.props.person.email}">{this.props.person.email}</a></li>
		
	</ul>

	</div>);
	}
}
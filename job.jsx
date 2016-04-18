let React = require("react");
let Description = require("./description.jsx");
module.exports = class Job extends React.Component {
	constructor(props) {
		super(props);
		this.renderDescription = this.renderDescription.bind(this);
	}
	renderDescription(key) {
		return <Description key={key} index={key} text={this.props.details.descriptions[key]} />
	}
	render() {
		return (
		<div>
		<p><strong>{this.props.details.role}</strong>, <u>{this.props.details.company}</u> </p>
			<ul>
				{Object.keys(this.props.details.descriptions).map(this.renderDescription)}
			</ul>
		</div>
		);
	}
};

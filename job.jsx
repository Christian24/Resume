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
		<h4>{this.props.details.role}, {this.props.details.company} </h4>
			<ul>
				{Object.keys(this.props.details.descriptions).map(this.renderDescription)}
			</ul>
		</div>
		);
	}
};

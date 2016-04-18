let React = require("react");
let Description = require("./description.jsx");
let Subheading = require("./subheading.jsx");
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
			<Subheading first={this.props.details.role} second={this.props.details.company} start={this.props.details.start} end={this.props.details.end} />
		
			<ul>
				{Object.keys(this.props.details.descriptions).map(this.renderDescription)}
			</ul>
		</div>
		);
	}
};

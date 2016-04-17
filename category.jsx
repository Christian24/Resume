let React = require("react");
let Job = require("./job.jsx");
module.exports = class Category extends React.Component {
	constructor(props) {
		super(props);
		this.renderJob = this.renderJob.bind(this);
	}
	renderJob(key) {
		return <Job key={key} index={key} details={this.props.details.items[key]} />
	}
	render() {
		return (
		<div>
		<h3>{this.props.details.name} </h3>
		{Object.keys(this.props.details.items).map(this.renderJob)}
		</div>
		);
	}
};

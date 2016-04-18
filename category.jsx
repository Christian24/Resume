let React = require("react");
let Job = require("./job.jsx");
let Heading = require("./heading.jsx");
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
		<Heading title={this.props.details.name}/> 
		{Object.keys(this.props.details.items).map(this.renderJob)}
		</div>
		);
	}
};

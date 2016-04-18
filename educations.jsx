let React = require("react");
let Education = require("./education.jsx");
let Heading = require("./heading.jsx");
module.exports = class Educations extends React.Component {
	constructor(props) {
		super(props);
		this.renderEducation = this.renderEducation.bind(this);
	}
	renderEducation(key) {
		return <Education key={key} index={key} details={this.props.educations[key]} />
	}
	render() {
		return (<div>
	<Heading title={this.props.title} />
			  	{Object.keys(this.props.educations).map(this.renderEducation)}
		</div>);
	}
};
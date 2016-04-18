let React = require("react");
let Education = require("./education.jsx");
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
		<h3>Education</h3>
			  	{Object.keys(this.props.educations).map(this.renderEducation)}
		</div>);
	}
};
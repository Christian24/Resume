let React = require("react");
let ResumeHeader = require("./resumeHeader.jsx");
let Category = require("./category.jsx");
let Languages = require("./languages.jsx");
let Educations = require("./educations.jsx");
let Technologies = require("./technologies.jsx");

module.exports = class Resume extends React.Component {
	constructor(props) {
		super(props);
		this.renderCategory = this.renderCategory.bind(this);
	}
	renderCategory(key) {
		return <Category key={key} index={key} details={this.props.categories[key]} />
	}
	render() {
		return (
	 <div className="container">
		 <ResumeHeader title={this.props.currentResume.title} person={this.props.person} />
	 	{Object.keys(this.props.categories).map(this.renderCategory)}
		   <Educations title={this.props.currentResume.education}  educations={this.props.educations} />
		  <Languages title={this.props.currentResume.languages} languages={this.props.languages} />
		 <Technologies title={this.props.currentResume.technologies}  technologies={this.props.technologies} />
	 </div>
		);
	}
};

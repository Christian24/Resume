let React = require("react");
let ResumeHeader = require("./resumeHeader.jsx");
let Languages = require("./languages.jsx");
module.exports = class Resume extends React.Component {
  render() {
  	return(
	 <div>
		 <ResumeHeader title={this.props.currentResume.title} person={this.props.person} />
		  <Languages title={this.props.currentResume.languages} languages={this.props.languages} />
	 </div>
		);
		 }
};

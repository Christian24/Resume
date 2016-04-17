let React = require("react");
let ResumeHeader = require("./resumeHeader.jsx");
module.exports = class Resume extends React.Component {
  render() {
  	return(
	 <div>
		 <ResumeHeader title={this.props.currentResume.title} person={this.props.person} />
	 </div>
		);
		 }
};

let React = require("react");
module.exports = class Subheading extends React.Component {

	render() {
let text = "";
if(this.props.start && this.props.end){
text = this.props.start +" - "+ this.props.end;
}
		return 		(<p><strong>{this.props.first}</strong>, <u>{this.props.second}</u><span className="pull-right">{text}</span> </p>);
	}
};
let React = require("react");
import { connect } from 'react-redux';
class Subheading extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		let text = "";
		if(this.props.start && this.props.end){
			text = this.props.start + " - " + this.props.end;

		}
		if(this.props.text) {
			text = this.props.text;
		}

		let value = this.props.first + " / " + this.props.second + " (" + text + ")";
		this.context.store.dispatch({
			type: "ADD_NOTE",
			state: value
		});

	}
	render() {
let text = "";
if(this.props.start && this.props.end){
	text = this.props.start + " - " + this.props.end;

}
if(this.props.text) {
	text = this.props.text;
}
		return 		(<p onClick={this.handleClick}><strong>{this.props.first}</strong>, <u>{this.props.second}</u><span className="pull-right">{text}</span> </p>);
	}
}
Subheading.contextTypes = {
	store: React.PropTypes.object
};
module.exports = connect()(Subheading);
let React = require("react");
let classNames = require('classnames');
import { connect } from 'react-redux'

module.exports = class Description extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
	
	
		this.props.dispatch({
			type: "ADD_NOTE",
			state: this.props.text
		});
		
	}
	render() {
		let classes = classNames({
			"skill": this.props.isSkill,
		
		}, this.props.skillClass);
		
		return (<li onClick={this.handleClick} className={classes}>{this.props.text}</li>);
	}
};
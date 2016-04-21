let React = require("react");
let classNames = require('classnames');
import { connect } from 'react-redux';

class Description extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
	
	
		this.context.store.dispatch({
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
 Description.contextTypes = {
	store: React.PropTypes.object
};
 module.exports = connect()(Description);
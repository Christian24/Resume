let React = require("react");
let classNames = require('classnames');
module.exports = class Language extends React.Component {
	render() {
		let classes = classNames({
			"skill": this.props.isSkill,

		}, this.props.skillClass);
		return (<li className={classes}>{this.props.details.name} ({this.props.details.description})</li>);
		}
};
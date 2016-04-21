let React = require("react");
let Description = require("./description.jsx");
let SmallHeading = require("./smallheading.jsx");

module.exports = class Technology extends React.Component {
	constructor(props) {
		super(props);
		this.renderSkill = this.renderSkill.bind(this);
	}
	renderSkill(key) {
		let last = this.props.details.items[this.props.details.items.length - 1];
		let isLast = last == this.props.details.items[key];
		
		return <Description key={key} index={key} text={this.props.details.items[key]} isLast={isLast} isSkill={true} skillClass="skill-technology" />
		
	}
	render() {
		return (<div>
		<SmallHeading title={this.props.details.name} />


	<ul className="list-inline">
		{Object.keys(this.props.details.items).map(this.renderSkill)}
	</ul>
		</div>);
	}
};

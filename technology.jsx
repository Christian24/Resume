let React = require("react");
let Description = require("./description.jsx");
module.exports = class Technology extends React.Component {
	constructor(props) {
		super(props);
		this.renderSkill = this.renderSkill.bind(this);
	}
	renderSkill(key) {
		return <Description key={key} index={key} text={this.props.details.items[key]} />
	}
	render() {
		return (<div>
		<h7>
			{this.props.details.name}
			
		</h7>
	<ul className="list-inline">{Object.keys(this.props.details.items).map(this.renderSkill)}
	</ul>
		</div>);
	}
};
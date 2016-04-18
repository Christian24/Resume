let React = require("react");
let Technology = require("./technology.jsx");
module.exports = class Technologies extends React.Component {
	constructor(props) {
		super(props);
		this.renderTechnology = this.renderTechnology.bind(this);
	}
	renderTechnology(key) {
		return <Technology key={key} index={key} details={this.props.technologies[key] } />;
	}
	render() {
		return (<div>
		<h3>{this.props.title}</h3>
			
			  		{Object.keys(this.props.technologies).map(this.renderTechnology)}
					  
			  
		</div>);
	}
};
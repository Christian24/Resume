let React = require("react");
let Language = require("./language.jsx");
module.exports = class Languages extends React.Component {
	renderLanguage(key){
		return <Language details={this.props.languages[key]} />
	}
	render() {
		return (<div>
	<h3>{this.props.title}  </h3>
	<ul className="list-inline">
	{
			console.log(this.props.languages)
		//Object.keys(this.props.languages).map(renderLanguage)
		}
		
	</ul>

	</div>);
	}
}
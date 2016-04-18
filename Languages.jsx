let React = require("react");
let Language = require("./language.jsx");
let Heading = require("./heading.jsx");
module.exports = class Languages extends React.Component {
	constructor(props) {
		super(props);
		this.renderLanguage = this.renderLanguage.bind(this);
	}
	renderLanguage(key) {
		
		return <Language key={key} index={key} details={this.props.languages[key]} isSkill={true} skillClass="skill-language" />
		
	}
	render() {
		return (<div>
	<Heading title={this.props.title} />
	<ul className="list-inline">
		
		{
		//console.log(this.props.languages)
		Object.keys(this.props.languages).map(this.renderLanguage)
		}
		

	</ul>


	</div>);
	}
}
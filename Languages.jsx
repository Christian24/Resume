let React = require("react");
let Description = require("./description.jsx");
let Heading = require("./heading.jsx");
module.exports = class Languages extends React.Component {
	constructor(props) {
		super(props);
		this.renderLanguage = this.renderLanguage.bind(this);
	}
	renderLanguage(key) {
		let lang = this.props.languages[key];
		console.log(lang);
		console.log(key);
		let text = lang.name + " (" + lang.description + ")";
		return <Description key={key} index={key} text={text} isSkill={true} skillClass="skill-language" />
		
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
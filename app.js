const React = require("react");
const ReactDOM = require("react-dom");
const Resume = require("./resume.jsx");

let App = React.createClass ({
getInitialState() {
	return { resumes: {}, currentResume: 0 };
},
loadData() {
	this.setState({ resumes: require("./resumeData"), currentResume: 0 });
	console.log("Initial state set");
},
componentDidMount() {
	this.loadData();
},

render() {
	return (<div><Resume /></div>);
}
});
ReactDOM.render(<App />, document.getElementById("target"));

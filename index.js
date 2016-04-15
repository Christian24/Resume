const React = require("react");
const ReactDOM = require("react-dom");
const Resume = require("./resume.jsx");
class App extends React.Component {
  render() {
    return (<div><Resume /></div>);
  }
}
ReactDOM.render(<App />, document.getElementById("target"));

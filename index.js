/*
React
ReactDOM
*/

const container = document.getElementById("root");

class Heading extends React.Component {
  render() {
    return React.createElement(
      "h1",
      {
        title: "Hello react!",
        className: "heading",
      },
      "Hello React.js!"
    );
  }
}

const reactElement = React.createElement(Heading);

ReactDOM.render(reactElement, container);


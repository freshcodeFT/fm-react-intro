/*
React
ReactDOM
*/

const container = document.getElementById("root");

const reactElement = React.createElement("h1", {
  title: "Hello react!",
  className: "heading",
}, "Hello React.js!");

console.log(reactElement);

ReactDOM.render(reactElement, container);

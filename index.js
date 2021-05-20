/*
React
ReactDOM
*/

const container = document.getElementById("root");

/*class Heading extends React.Component {
  render() {
    console.log(this);
    const {name, classNameForHeading, titleForHeading, children} = this.props;
    return React.createElement(
      "h1",
      {
        title: titleForHeading,
        className: classNameForHeading,
      },
      `Hello ${name}!`,
      ...children,
    );
  }
}

const reactElement = React.createElement(Heading, {
  name: "React",
  titleForHeading: 'Hello Everyone!',
  classNameForHeading: "heading test",
},
"test",
"lorem",
"something",
);

ReactDOM.render(reactElement, container);
*/

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }
  decrement() {
    const {counter} = this.state;
    this.setState({counter: counter - 1});
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("h1", null, this.state.counter),
      React.createElement("button", { onClick: this.decrement }, "-"),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  }
}
ReactDOM.render(React.createElement(Counter), container);

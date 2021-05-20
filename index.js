/*
React
ReactDOM
*/

const container = document.getElementById("root");

class Heading extends React.Component {
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

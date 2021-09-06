class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: "placeholder text...",
    };
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div>
        <Editor text={this.state.text} onChange={this.handleChange} />
        <Preview text={this.state.text} />
      </div>
    );
  }
}

const Editor = (props) => {
  return (
    <div>
      <p>Editor: </p>
      <textarea value={props.text} onChange={props.onChange}></textarea>
    </div>
  );
};

const Preview = (props) => {
  return (
    <div>
      <p>Preview: </p>
      <p>{props.text}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

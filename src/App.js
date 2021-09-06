class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Editor />
        <Preview />
      </div>
    );
  }
}

const Editor = () => {
  return (
    <div>
      <p>Editor</p>
      <textarea></textarea>
    </div>
  );
};

const Preview = () => {
  return (
    <div>
      <p>Preview</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

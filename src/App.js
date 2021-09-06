class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>React App</h1>
        <Editor />
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

ReactDOM.render(<App />, document.getElementById("root"));

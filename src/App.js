marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: placeholder,
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
    <div className="flex-container">
      <div id="editor-element">
        <h2 className="component-header">Editor</h2>
        <textarea value={props.text} onChange={props.onChange} id="editor"></textarea>
      </div>
    </div>
  );
};

const Preview = (props) => {
  return (
    <div className="flex-container">
      <div id="preview-element">
        <h2 className="component-header">Preview</h2>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.text) }}></div>
      </div>
    </div>
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

ReactDOM.render(<App />, document.getElementById("root"));

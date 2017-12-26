
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision Test';
    const subtitle = 'Take Action!'
    const options_render = ['Opt to tke 1', 'Opt to tke 2', 'Opt to tke 3']
    return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action />
          <Options options={options_render} />
          <AddOption />
      </div>
    );
  }
}


class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What is the best decision to take?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.option}</p>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll () {
    if(this.props.options){
        alert('All options were remove');
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)}>Remove All options</button>
        <p>Here should be some options for render like:</p>
        <ul>
          {this.props.options.map((opt, index) => (
            <li key={index}><Option option={opt}/></li>
          ))}
        </ul>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault();
    const new_option = e.target.elements.option_add.value.trim();
    if (new_option) {
      alert(new_option);
    }
  }
  render(){
    return (
      <form onSubmit={this.handleAddOption}>
        <input type='text' name='option_add' />
        <button>This should add an Option for render</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

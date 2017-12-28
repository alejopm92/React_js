
class IndecisionApp extends React.Component {
  constructor (props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.state = {
      options_render: []
    };
  }
  componentDidMount() {
    try {
      const json_options_render = localStorage.getItem('options_render');
      const options_render = JSON.parse(json_options_render);
      if (options_render){
          this.setState(() =>({options_render}));
      }
    } catch (e) {

    }
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options_render.length !== this.state.options_render.length){
      const json_options_render = JSON.stringify(this.state.options_render)
      localStorage.setItem('options_render',json_options_render);
      console.log('Component did update');
    }
  }

  handleDeleteOption (option_remove) {
    this.setState((prevState) => ({
        options_render: prevState.options_render.filter((option) => option_remove !== option)
      })
    );
  }

  handleAction() {
    const rand_num = Math.floor(this.state.options_render.length * Math.random());
    const action_selected = this.state.options_render[rand_num]
    alert(action_selected);
  }

  handleAddOption(new_option){

    if(!new_option){
      return 'Enter a valid option.';
    }
    else if (this.state.options_render.indexOf(new_option) > -1){
      return 'This option already exists.';
    }

    this.setState((prevState) =>({
        options_render : prevState.options_render.concat(new_option)
      })
    );
  }

  handleDeleteOptions (){
    alert('All options are going to be deleted');
    this.setState(() => ({options_render: this.props.options}));
  }
  render() {
    const title = 'Indecision Test';
    const subtitle = 'Take Action!';
    return (
        <div>
          <Header />
          <Action
            hasOptions={this.state.options_render.length > 0}
            handleAction={this.handleAction}
          />
          <Options
            options={this.state.options_render}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
};

Header.defaultProps ={
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleAction}
        disabled={!props.hasOptions}>
        What is the best decision to take?
      </button>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button onClick={(e) => {props.handleDeleteOption(props.option);}}>
        x
      </button>
    </div>
  );
};

const Options = (props) => {

  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All options</button>
      <p>Here should be some options for render like:</p>
      {props.options.length === 0 && <p><b>Please add Options for select!</b></p> }
      <ul>
        {props.options.map((opt, index) => (
          <li key={index}>
            <Option
              handleDeleteOption={props.handleDeleteOption}
              option={opt}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state ={
      error: undefined
    };
  }
  handleAddOption (e) {
    e.preventDefault();
    const new_option = e.target.elements.option_add.value.trim();
    const error = this.props.handleAddOption(new_option);

    this.setState(() => ({error}));
    if(!error){
      e.target.elements.option_add.value = '';
    }
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option_add' />
          <button>This should add an Option for render</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));

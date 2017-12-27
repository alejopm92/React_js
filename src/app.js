
class IndecisionApp extends React.Component {
  constructor (props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.state = {
      options_render: []
    };
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

    this.setState((prevState) => {
      return {
        options_render : prevState.options_render.concat(new_option)
      };
    });
  }

  handleDeleteOptions (){
    alert('All options are going to be deleted');
    this.setState(() => {
      return {
        options_render: []
      };
    });
  }
  render() {
    const title = 'Indecision Test';
    const subtitle = 'Take Action!';
    return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action
            hasOptions={this.state.options_render.length > 0}
            handleAction={this.handleAction}
          />
          <Options
            options={this.state.options_render}
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
      </div>
    );
  }
}


const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
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
      <p>{props.option}</p>
    </div>
  );
};

const Options = (props) => {

  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All options</button>
      <p>Here should be some options for render like:</p>
      <ul>
        {props.options.map((opt, index) => (
          <li key={index}><Option option={opt}/></li>
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

    this.setState(() =>{
      return {error};
      }
    );
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

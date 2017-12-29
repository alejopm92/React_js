import React from 'react';

export default class AddOption extends React.Component {
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

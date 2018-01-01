import React from 'react';

export default class AddOption extends React.Component {
  state ={
    error: undefined
  };
  handleAddOption = (e) => {
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
        {this.state.error && <p
          className="add-option-message">
          {this.state.error}
        </p>}
        <form
          className="add-option"
          onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type='text'
            name='option_add' />
          <button
            className="button"
            >Add Option
          </button>
        </form>
      </div>
    );
  }
}

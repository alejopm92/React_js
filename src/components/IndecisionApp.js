import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

  state = {
    options_render: [],
    slected_option: undefined
  };

  handleDeleteOption = (option_remove) => {
    this.setState((prevState) => ({
        options_render: prevState.options_render.filter((option) => option_remove !== option)
      })
    );
  }

  handleAction = () => {
    const rand_num = Math.floor(this.state.options_render.length * Math.random());
    const action_selected = this.state.options_render[rand_num]
    this.setState(() => ({slected_option: action_selected}));
  }

  handleAddOption = (new_option) =>{

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

  handleSelectedOption = () => {
    this.setState(() => ({slected_option: undefined}));
  }

  handleDeleteOptions = () => {
    alert('All options are going to be deleted');
    this.setState(() => ({options_render: this.props.options}));
  }

  componentDidMount = () => {
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

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.options_render.length !== this.state.options_render.length){
      const json_options_render = JSON.stringify(this.state.options_render)
      localStorage.setItem('options_render',json_options_render);
      console.log('Component did update');
    }
  }

  render() {
    const title = 'Indecision Test';
    const subtitle = 'Take Action!';
    return (
        <div>
          <Header />
          <div className="container">
            <Action
              hasOptions={this.state.options_render.length > 0}
              handleAction={this.handleAction}
            />
            <div className="widget">
              <Options
                options={this.state.options_render}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption}
              />
            </div>
          </div>
          <OptionModal
            slected_option={this.state.slected_option}
            handleSelectedOption={this.handleSelectedOption}
          />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

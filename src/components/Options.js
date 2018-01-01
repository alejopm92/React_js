import React from 'react';
import Option from './Option'


const Options = (props) =>  (
    <div>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}>Remove All options</button>
      <p>Here should be some options for render like:</p>
      {props.options.length === 0 && <p><b>Please add Options for select!</b></p> }
      {props.options.map((opt, index) => (
        <Option
          handleDeleteOption={props.handleDeleteOption}
          key={index}
          option={opt}/>
      ))}
    </div>
  );

export default Options;

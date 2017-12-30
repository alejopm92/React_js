import React from 'react';
import Option from './Option'


const Options = (props) =>  (
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

export default Options;

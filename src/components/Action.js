import React from 'react';

const Action = (props) =>(
    <div>
      <button
        className="big-button"
        onClick={props.handleAction}
        disabled={!props.hasOptions}>
        What is the best decision to take?
      </button>
    </div>
  );

export default Action;

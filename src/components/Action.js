import React from 'react';

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

export default Action;

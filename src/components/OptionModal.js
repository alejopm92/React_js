import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    ariaHideApp={false}
    isOpen={!!props.slected_option}
    onRequestClose={props.handleSelectedOption}
    contentLabel= "Selected Option">
    <h3>Selected OPtion</h3>
    {props.slected_option && <p>{props.slected_option}</p>}
    <button
      onClick={props.handleSelectedOption}>
        OK(?)
    </button>
  </Modal>
);

export default OptionModal;

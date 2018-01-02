import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    ariaHideApp={false}
    isOpen={!!props.slected_option}
    onRequestClose={props.handleSelectedOption}
    closeTimeoutMS={200}
    className="modal"
    contentLabel= "Selected Option">
    <h3 className="modal__title">
      Selected Option
    </h3>
    {props.slected_option && <p className="modal__body">{props.slected_option}</p>}
    <button
      className="button"
      onClick={props.handleSelectedOption}>
        OK(?)
    </button>
  </Modal>
);

export default OptionModal;

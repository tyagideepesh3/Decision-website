import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        contentLabel="selected option"
        closeTimeoutMS= {4000}
        onRequestClose={props.clearBox}
        className="modal"
    >
        <h3 className="modal__title">Selected Item</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearBox}>Okay</button>
    </Modal>
)
export default OptionModal
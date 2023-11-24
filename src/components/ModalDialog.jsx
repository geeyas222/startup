import React,{useState} from 'react'
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const ModalDialog = ({isOpen, closeModal}) => {
  if(!isOpen) {
    return null;
  }
  return (
   <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel='Modal'
    style={customStyles}>
      <h2>Modal Title</h2>
      <p>Some text in the Modal...</p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  )
}

export default ModalDialog
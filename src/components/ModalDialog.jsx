import React, { useState } from 'react'
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
const ModalDialog = ({isOpen, closeModal,content}) => {
  if(!isOpen) {
    return null;
  }
  return (
   <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel='Modal'
    style={customStyles}>
    {content}
    <div>
    <button stype="button" className={`py-4 px-6 font-poppins font-medium text-center text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`} onClick={closeModal}>Close Modal</button>
    </div>
      
    </Modal>
  )
}

export default ModalDialog
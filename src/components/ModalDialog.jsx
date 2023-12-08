import React, { useState } from 'react'
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-58%',
    transform: 'translate(-50%, -50%)',
  },
};
const ModalDialog = ({ isOpen, closeModal, content }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);


  if (!isOpen) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Modal'
      style={customStyles}>
      <div className="modal-header">
        <button onClick={closeModal} style={{ float: 'right' }}>
          <IoMdClose className='text-white text-[25px] font-bold' />
        </button>
      </div>
      <div className="modal-body">
        {content}
      </div>


    </Modal>
  )
}

export default ModalDialog
import React from 'react';
import { ModalWindow, Overlay } from './Modal.css';

export const Modal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  const handleClose = event => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleClose} onKeyDown={handleClose}>
        <ModalWindow>
          <img src={imageUrl} alt="" />
        </ModalWindow>
      </Overlay>
    </>
  );
};

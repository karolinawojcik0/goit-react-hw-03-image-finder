import React from 'react';

export const Modal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  const handleClose = event => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleClose} onKeyDown={handleClose}>
      <div className="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

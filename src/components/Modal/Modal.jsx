import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
// import { Component } from 'react';
import { Overlay, StyledModal, StyledImg } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal');

function Modal({ modalData, onModalClose }) {
  const { largeImageURL, tags } = modalData;

  const handleCloseModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      onModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <Overlay onClick={handleCloseModal}>
      <StyledModal>
        <StyledImg src={largeImageURL} alt={tags} />
      </StyledModal>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onModalClose: PropTypes.func,
};

export default Modal;


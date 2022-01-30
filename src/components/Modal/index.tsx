import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    if (modalStatus !== isOpen) {
      setModalStatus(isOpen);

      if (isOpen) {
      document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, [isOpen, modalStatus]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent',
          borderRadius: '0px',
          color: '#000000',
          maxWidth: '736px',
          border: 'none',
          width: '100%',
        },
        overlay: {
          backgroundColor: '#121214e6',
          zIndex: 2,
        },
      }}
    >
      {children}
    </ReactModal>
  )
}
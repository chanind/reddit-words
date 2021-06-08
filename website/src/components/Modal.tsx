import React, { FC, ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={{
      overlay: {
        background: "rgba(0, 0, 0, 0.3)",
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "48rem",
        overflow: "visible",
      },
    }}
  >
    <button
      onClick={onClose}
      className="absolute top-0 right-0 text-gray-500 hover:text-gray-900 text-xl px-4 py-2"
    >
      &times;
    </button>
    <h2 className="text-2xl mb-5">{title}</h2>
    {children}
  </ReactModal>
);

export default Modal;

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
        background: "rgba(0, 0, 0, 0.5)",
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        overflow: "visible",
        padding: 0,
        border: "none",
      },
    }}
  >
    <div className="bg-gray-800 p-3 rounded border border-gray-500 max-w-full md:max-w-4xl">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 text-gray-500 hover:text-gray-100 text-xl px-4 py-2"
      >
        &times;
      </button>
      <h2 className="text-2xl mb-5 text-gray-100">{title}</h2>
      {children}
    </div>
  </ReactModal>
);

export default Modal;

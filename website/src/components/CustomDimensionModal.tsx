import React, { FC, useEffect, useState } from "react";
import Modal from "./Modal";
import SenseAutosuggest from "./SenseAutosuggest";
import { Link } from "react-router-dom";

interface CustomDimensionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDimensionModal: FC<CustomDimensionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [leftSense, setLeftSense] = useState<null | string>(null);
  const [rightSense, setRightSense] = useState<null | string>(null);

  useEffect(() => {
    if (!isOpen) {
      setLeftSense(null);
      setRightSense(null);
    }
  }, [isOpen]);

  const destination = `/diff?left=${leftSense}&right=${rightSense}`;
  return (
    <Modal title="Create your Own Dimension" isOpen={isOpen} onClose={onClose}>
      <p className="text-gray-400">
        Choose 2 words to subtract to create an analysis dimension.{" "}
        <span className="hidden md:inline">
          The results will be other words whose difference is like the
          difference between the words you select here.
        </span>
      </p>
      <div className="flex flex-wrap md:flex-nowrap mt-6 justify-between items-center">
        <div className="m-3">
          <div className="text-xs mb-1 text-gray-100">Left word</div>
          <SenseAutosuggest onChange={setLeftSense} />
        </div>
        <div className="m-3">
          <div className="text-xs mb-1 text-gray-100">Right word</div>
          <SenseAutosuggest onChange={setRightSense} />
        </div>
      </div>

      <hr className="my-5 border-1 border-gray-500" />
      <div className="flex">
        {leftSense && rightSense ? (
          <Link
            to={destination}
            className="block p-3 px-10 rounded border border-blue-300 bg-gray-400 bg-opacity-5 hover:bg-opacity-10 text-blue-300"
          >
            Explore Dimension
          </Link>
        ) : (
          <span className="block p-3 px-10 rounded border border-gray-500 text-gray-500 select-none">
            Explore Dimension
          </span>
        )}
      </div>
    </Modal>
  );
};

export default CustomDimensionModal;

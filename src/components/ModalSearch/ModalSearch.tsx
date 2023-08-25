import React from "react";
import Modal from "react-modal";

import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";

import "./style.css";

Modal.setAppElement("#root");

interface ModalSearchProps {
  onClickNext: () => void;
  onClickPrev: () => void;
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ModalSearch: React.FC<ModalSearchProps> = ({
  onClickNext,
  onClickPrev,
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="ModalSearch__overlay"
      className="ModalSearch"
    >
      <div className="flex gap-5 rounded text-text-400">
        <button className="p-2" onClick={onClickPrev}>
          <ArrowLeft width={35} height={35} />
        </button>
        <button className="p-2" onClick={onClickNext}>
          <ArrowLeft width={35} height={35} className="rotate-180" />
        </button>
      </div>
    </Modal>
  );
};

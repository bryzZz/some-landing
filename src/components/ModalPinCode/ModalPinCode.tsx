import React from "react";
import Modal, { Props } from "react-modal";

import { ReactComponent as Close } from "assets/icons/modal-close.svg";

import "./style.css";
import { PinCodeInput } from "components/PinCodeInput";

Modal.setAppElement("#root");

interface ModalPinCodeProps extends Props {}

export const ModalPinCode: React.FC<ModalPinCodeProps> = (props) => {
  return (
    <Modal
      {...props}
      overlayClassName="ModalPinCode__overlay"
      className="ModalPinCode"
    >
      <button
        className="absolute right-5 top-[25px]"
        onClick={props.onRequestClose}
      >
        <Close />
      </button>
      <div className="p-10 pt-[50px]">
        <h2 className="heading-2 mb-[25px]">Покупка</h2>
        <PinCodeInput className="mb-5" />
        <p className="sub-heading-3 text-[#959595]">
          Введите 6-значный код, полученный в боте.
        </p>
      </div>
    </Modal>
  );
};

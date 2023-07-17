import React from "react";
import Modal, { Props } from "react-modal";

import { ReactComponent as Close } from "assets/icons/modal-close.svg";

import "./style.css";

Modal.setAppElement("#root");

export const ModalPublicOffer: React.FC<Props> = (props) => {
  return (
    <Modal
      {...props}
      overlayClassName="ModalPublicOffer__overlay"
      className="ModalPublicOffer"
    >
      <button
        className="absolute right-[10px] top-[10px]"
        onClick={props.onRequestClose}
      >
        <Close />
      </button>
      <div className="px-5 py-10 text-center">
        <h3 className="heading-3 mb-4">Публичная оферта</h3>
        <p className="sub-heading-4 mb-[10px]">
          Настоящее Соглашение об оказании услуг веб-мастерами и рекламодателям
          при регистрации в Системе является официальной письменной публичной
          офертой Leadshub.
        </p>
        <p className="sub-heading-4">
          Перед регистрацией в партнерской программе внимательно ознакомьтесь с
          условиями Соглашения. Использование системы возможно только на этих
          условиях.
        </p>
        <p className="sub-heading-4">
          Перед регистрацией в партнерской программе внимательно ознакомьтесь с
          условиями Соглашения. Использование системы возможно только на этих
          условиях.
        </p>
        <p className="sub-heading-4">
          Перед регистрацией в партнерской программе внимательно ознакомьтесь с
          условиями Соглашения. Использование системы возможно только на этих
          условиях.
        </p>
        <p className="sub-heading-4">
          Перед регистрацией в партнерской программе внимательно ознакомьтесь с
          условиями Соглашения. Использование системы возможно только на этих
          условиях.
        </p>
        <p className="sub-heading-4">
          Перед регистрацией в партнерской программе внимательно ознакомьтесь с
          условиями Соглашения. Использование системы возможно только на этих
          условиях.
        </p>
      </div>
    </Modal>
  );
};

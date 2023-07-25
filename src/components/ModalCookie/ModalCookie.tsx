import React from "react";
import Modal, { Props } from "react-modal";

import "./style.css";

Modal.setAppElement("#root");

export const ModalCookie: React.FC<Props> = (props) => {
  return (
    <Modal
      {...props}
      overlayClassName="ModalCookie__overlay"
      className="ModalCookie"
    >
      <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center">
        <p className="sub-heading-4">
          Мы используем файлы cookie, чтобы обеспечить удобство пользователей и
          показывать релевантные маркетинговые предложения. Нажмите “Принять”,
          чтобы подвердить согласие на обработку cookies.{" "}
          <a className="text-[#3452FF] underline" href="asd">
            Подробнее
          </a>
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="btn-secondary px-5 py-2 text-xs font-bold 3xl:px-6 3xl:py-4 3xl:text-lg"
            onClick={props.onRequestClose}
          >
            Принять
          </button>
          <button
            className="btn-ternary px-5 py-2 text-xs font-bold 3xl:px-6 3xl:py-4 3xl:text-lg"
            onClick={props.onRequestClose}
          >
            Запретить
          </button>
        </div>
      </div>
    </Modal>
  );
};

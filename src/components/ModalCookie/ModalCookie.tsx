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
        <p className="sub-heading-4 max-w-[1000px]">
          Мы используем файлы cookie, чтобы обеспечить удобство пользователей и
          показывать релевантные маркетинговые предложения. Нажмите “Принять”,
          чтобы подвердить согласие на обработку cookies.{" "}
          <a className="text-[#3452FF] underline" href="asd">
            Подробнее
          </a>
        </p>
        <div className="z-50 flex items-center justify-center gap-3">
          <button className="btn-secondary py-3 text-[12px]">Принять</button>
          <button className="btn-secondary from-[#F71D1D] via-[#F7511D] to-[#F71D1D] py-3 text-[12px]">
            Запретить
          </button>
        </div>
      </div>
    </Modal>
  );
};

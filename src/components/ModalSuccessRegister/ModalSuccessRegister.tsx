import React from "react";
import Modal, { Props } from "react-modal";

import { ReactComponent as Close } from "assets/icons/modal-close.svg";
import { ReactComponent as Img } from "assets/images/success-register.svg";

import "./style.css";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

interface ModalSuccessRegisterProps extends Props {
  id: string;
  returnManager: string;
}

export const ModalSuccessRegister: React.FC<ModalSuccessRegisterProps> = ({
  id,
  returnManager,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      {...props}
      overlayClassName="ModalSuccessRegister__overlay"
      className="ModalSuccessRegister"
    >
      <button
        className="absolute right-[10px] top-[10px]"
        onClick={props.onRequestClose}
      >
        <Close />
      </button>
      <div className="px-5 py-10 text-center">
        <Img className="mx-auto" />
        <h3 className="heading-3 mb-1">{t("registration:success")}</h3>
        <p className="sub-heading-2 mb-2 font-semibold">
          {t("registration:id")}
          <span className="text-[#1D74F7]">{id}</span>
        </p>
        <p className="sub-heading-2 mb-8 font-semibold">
          {t("registration:manager")}
          <a
            href={`https://t.me/${returnManager.slice(1)}`}
            target="_blank"
            className="text-[#1D74F7] underline"
          >
            {returnManager}
          </a>
        </p>
        <p className="sub-heading-4 mb-[10px]">{t("registration:body1")}</p>
        <p className="sub-heading-4">{t("registration:body2")}</p>
      </div>
    </Modal>
  );
};

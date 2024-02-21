import React from "react";
import Modal from "react-modal";

import { ReactComponent as Close } from "assets/icons/modal-close.svg";

import "./style.css";
import { useCookieInfoModal } from "store/useModals";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

export const ModalCookieInfo: React.FC = () => {
  const { t } = useTranslation();

  const { isOpen, setIsOpen } = useCookieInfoModal();

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="ModalCookieInfo__overlay"
      className="ModalCookieInfo"
      bodyOpenClassName="ModalPublicOffer__open"
    >
      <div className="mb-10">
        <h3 className="heading-2 mb-4">{t("cookieInfo:title")}</h3>
        <button
          className="absolute right-[10px] top-[10px] md:right-[20px] md:top-[20px]"
          onClick={onClose}
        >
          <Close />
        </button>
      </div>
      <div className="ModalCookieInfo__text custom-scroll pr-12 md:pr-16 lg:pr-40">
        <p className="sub-heading-4 3xl:sub-heading-2 mb-5 leading-6">
          {t("cookieInfo:body1")}
        </p>
        <p className="sub-heading-4 3xl:sub-heading-2 mb-5 leading-6">
          {t("cookieInfo:body2")}
        </p>
        <p className="sub-heading-4 3xl:sub-heading-2 mb-5 leading-6">
          {t("cookieInfo:body3")}
        </p>
        <p className="heading-6 3xl:heading-4 mb-[10px]">
          {t("cookieInfo:body4")}
        </p>
        <p className="sub-heading-4 3xl:sub-heading-2 mb-5 leading-6">
          {t("cookieInfo:body5")}
        </p>
        <p className="sub-heading-4 3xl:sub-heading-2 mb-5 leading-6">
          {t("cookieInfo:body6")}
        </p>
        <p className="sub-heading-4 3xl:sub-heading-2 mb-5 leading-6">
          {t("cookieInfo:body7")}
        </p>
      </div>
    </Modal>
  );
};

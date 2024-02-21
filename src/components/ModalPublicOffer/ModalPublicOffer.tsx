import React from "react";
import Modal from "react-modal";

import { ReactComponent as Close } from "assets/icons/modal-close.svg";

import "./style.css";
import { usePublicOfferModal } from "store/useModals";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

export const ModalPublicOffer: React.FC = () => {
  const { t } = useTranslation();

  const { isOpen, setIsOpen } = usePublicOfferModal();

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="ModalPublicOffer__overlay"
      className="ModalPublicOffer"
      bodyOpenClassName="ModalPublicOffer__open"
    >
      <div className="mb-10">
        <h3 className="heading-2 mb-4">{t("publicOffer:title")}</h3>
        <button
          className="absolute right-[10px] top-[10px] md:right-[20px] md:top-[20px]"
          onClick={onClose}
        >
          <Close />
        </button>
      </div>
      <div className="ModalPublicOffer__text custom-scroll pr-12">
        <p className="sub-heading-4 3xl:sub-heading-2 mb-5 leading-6">
          {t("publicOffer:body1")}
          <br />
          <br />
          {t("publicOffer:body2")}{" "}
          <span className="underline">{t("publicOffer:body3")}</span>
        </p>

        {(t("publicOffer:points", { returnObjects: true }) as any[]).map(
          ({ heading, points }, i) => (
            <div className="mb-3" key={i}>
              <p className="heading-6 3xl:heading-4 mb-[10px]">
                {i + 1}. {heading}
              </p>
              {(points as any[]).map((point, j) => (
                <p
                  className="sub-heading-4 3xl:sub-heading-2 leading-6"
                  key={j}
                >
                  {i + 1}.{j + 1}. {point}
                </p>
              ))}
            </div>
          )
        )}
      </div>
    </Modal>
  );
};

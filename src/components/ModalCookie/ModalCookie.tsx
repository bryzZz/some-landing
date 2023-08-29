import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import useLocalStorage from "hooks/useLocalStorage";

import "./style.css";

Modal.setAppElement("#root");

export const ModalCookie: React.FC = () => {
  const [lastCookieDate, setLastCookieDate] = useLocalStorage(
    "leadshub-cookie",
    { date: new Date() }
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();

    const t2 = now.getTime();
    const t1 = new Date(lastCookieDate.date).getTime();

    const diff = Math.floor((t2 - t1) / (24 * 3600 * 1000));

    if (diff < 0 || diff > 30) {
      setLastCookieDate({ date: now });
      setIsOpen(true);
    }
  }, [lastCookieDate, setLastCookieDate]);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
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
            onClick={onClose}
          >
            Принять
          </button>
          <button
            className="btn-ternary px-5 py-2 text-xs font-bold 3xl:px-6 3xl:py-4 3xl:text-lg"
            onClick={onClose}
          >
            Запретить
          </button>
        </div>
      </div>
    </Modal>
  );
};

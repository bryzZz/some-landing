import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import "./style.css";
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

// Бред какой-то
export const ModalCookie: React.FC = () => {
  const { t } = useTranslation();

  const [lastDate, setLastDate] = useState(() => {
    try {
      return localStorage.getItem("leadshub-cookie");
    } catch (error) {
      return null;
    }
  });
  const [firstSetted, setFirstSetted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const now = new Date();

    if (lastDate === null) {
      open();
      setFirstSetted(true);
      setLastDate(now.toString());
      return;
    }

    if (firstSetted) return;

    const t2 = now.getTime();
    const t1 = new Date(lastDate).getTime();

    const diff = Math.floor((t2 - t1) / (24 * 3600 * 1000));

    if (diff < 0 || diff > 30) {
      open();

      setLastDate(now.toString());
      // localStorage.setItem("leadshub-cookie", now.toString());
    }
  }, [firstSetted, lastDate]);

  useEffect(() => {
    if (lastDate) {
      localStorage.setItem("leadshub-cookie", lastDate);
    }
  }, [lastDate]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      overlayClassName="ModalCookie__overlay"
      className="ModalCookie"
    >
      <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center">
        <p className="sub-heading-4">
          {t("cookie:body")}{" "}
          <a className="text-[#3452FF] underline" href="asd">
            {t("cookie:more")}
          </a>
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="btn-secondary px-5 py-2 text-xs font-bold 3xl:px-6 3xl:py-3 3xl:text-base"
            onClick={close}
          >
            {t("cookie:accept")}
          </button>
          <button
            className="btn-ternary px-5 py-2 text-xs font-bold 3xl:px-6 3xl:py-3 3xl:text-base"
            onClick={close}
          >
            {t("cookie:decline")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

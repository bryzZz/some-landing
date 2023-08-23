import React from "react";
import Modal from "react-modal";

import { ReactComponent as Close } from "assets/icons/modal-close.svg";

import "./style.css";
import { useCookieInfoModal } from "store/useModals";

Modal.setAppElement("#root");

export const ModalCookieInfo: React.FC = () => {
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
        <h3 className="heading-3 mb-4">Уведомление об использовании cookie</h3>
        <button
          className="absolute right-[10px] top-[10px] md:right-[20px] md:top-[20px]"
          onClick={onClose}
        >
          <Close />
        </button>
      </div>
      <div className="ModalPublicOffer__text custom-scroll pr-12">
        <p className="sub-heading-4 mb-5">
          Наш сайт использует файлы cookie и другие похожие технологии
          (пиксельные тэги и т.п.), чтобы предоставлять услуги, наиболее
          отвечающие Вашим интересам и потребностям, а также собирать
          статистическую и маркетинговую информацию для анализа и
          совершенствования наших услуг.
        </p>
        <p className="sub-heading-4 mb-5">
          При использовании данного сайта, вы подтверждаете свое согласие на
          использование файлов cookie и других похожих технологий в соответствии
          с настоящим Уведомлением. Если Вы не согласны, чтобы мы использовали
          данный тип файлов, Вы должны соответствующим образом установить
          настройки Вашего браузера или не использовать наш сайт.
        </p>
        <p className="sub-heading-4 mb-5">
          Обращаем Ваше внимание на то, что при блокировании или удалении cookie
          файлов, мы не можем гарантировать корректную работу нашего сайта в
          Вашем браузере. Cookie файлы, которые сохраняются через веб-сайт, не
          содержат сведений, на основании которых можно Вас идентифицировать!
        </p>
        <p className="heading-6 mb-[10px]">
          Что такое файл cookie и другие похожие технологии
        </p>
        <p className="sub-heading-4 mb-5">
          Файл cookie представляет собой небольшой текстовый файл, сохраняемый
          на вашем компьютере, смартфоне или другом устройстве, которое Вы
          используете для посещения интернет-сайтов. Некоторые посещаемые Вами
          страницы могут также собирать информацию, используя пиксельные тэги и
          веб-маяки, представляющие собой электронные изображения, называемые
          одно-пиксельными (1×1) или пустыми GIFизображениями.
        </p>
        <p className="sub-heading-4 mb-5">
          Файлы cookie могут размещаться на вашем устройстве нами («собственные»
          файлы cookie) или другими операторами (файлы cookie «третьих лиц»).
        </p>
        <p className="sub-heading-4 mb-5">
          Мы используем два вида файлов cookie на сайте: «cookie сессии» и
          «постоянные cookie». Cookie сессии — это временные файлы, которые
          остаются на устройстве пока вы не покинете сайт. Постоянные cookie
          остаются на устройстве в течение длительного времени или пока вы
          вручную не удалите их (как долго cookie останется на вашем устройстве
          будет зависеть от продолжительности или «времени жизни» конкретного
          файла и настройки вашего браузера).
        </p>
      </div>
    </Modal>
  );
};

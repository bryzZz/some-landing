import React, { useState } from "react";
import Modal from "react-modal";

import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { ReactComponent as Cross } from "assets/icons/cross.svg";

import "./style.css";

Modal.setAppElement("body");

interface PointsStoreModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  product?: any;
}

export const PointsStoreModal: React.FC<PointsStoreModalProps> = ({
  product,
  ...other
}) => {
  const { img, supTitle, title, category, description } = product ?? {};

  const [counter, setCounter] = useState(1);

  if (other.isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const increaseCounter = () => {
    setCounter((p) => p + 1);
  };

  const decreaseCounter = () => {
    setCounter((p) => (p === 0 ? 0 : p - 1));
  };

  return (
    <Modal {...other} className="PointsStoreModal" closeTimeoutMS={50}>
      <div className="mb-14 flex items-center justify-end">
        <button
          className="rounded-full p-2 hover:bg-[#EEEEEE]"
          onClick={other.onRequestClose}
        >
          <Cross width="24px" height="24px" />
        </button>
      </div>

      <div className="max-w-72">
        <img src={img} className="mb-14 max-h-full object-cover" />
      </div>
      <h5 className="mb-2 font-black uppercase text-[#B5B5B5]">{supTitle}</h5>
      <h4 className="heading-3 mb-5 whitespace-pre-line">{title}</h4>
      <p className="mb-9 font-medium text-text-400">Категория: {category}</p>
      <p className="mb-6 text-[14px] text-text-300">{description}</p>

      <hr className="mb-6 bg-[E2E2E2]" />

      <div className="flex flex-wrap items-center justify-between gap-2 md:justify-normal md:gap-12">
        <div className="flex w-full max-w-[150px] items-center justify-between gap-2 rounded-[4px] border border-[D9D9D9] px-[13px] py-[15px] sm:gap-5">
          <button
            className="rounded-full p-1 hover:bg-[#EEEEEE]"
            onClick={decreaseCounter}
          >
            <Minus />
          </button>
          <span>{counter}</span>
          <button
            className="rounded-full p-1 hover:bg-[#EEEEEE]"
            onClick={increaseCounter}
          >
            <Plus />
          </button>
        </div>

        <button className="btn-secondary">Приобрести товар</button>
      </div>
    </Modal>
  );
};

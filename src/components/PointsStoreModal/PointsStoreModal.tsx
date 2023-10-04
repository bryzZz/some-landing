import React, { useState } from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";

import { ReactComponent as Cross } from "assets/icons/cross.svg";

import "./style.css";
import { Product } from "types";
import { ModalPinCode } from "components/ModalPinCode";
import { Counter } from "components/Counter";
import { Input } from "components/Input";

Modal.setAppElement("body");

interface PointsStoreModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  product?: Product;
}

interface PointsStoreModalFormValues {
  count: number;
  userId: string;
}

export const PointsStoreModal: React.FC<PointsStoreModalProps> = ({
  product,
  ...other
}) => {
  const { img, name, category, desc, price } = product ?? {};

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PointsStoreModalFormValues>({
    defaultValues: {
      count: 0,
    },
  });

  const [isPinCOdeModalOpen, setIsPinCOdeModalOpen] = useState(false);

  if (other.isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const onSubmit = handleSubmit((data) => {
    // if (data.count > 0) setIsPinCOdeModalOpen(true);
  });

  return (
    <Modal {...other} className="PointsStoreModal" closeTimeoutMS={50}>
      <div className="mb-5 flex items-center justify-end">
        <button
          className="rounded-full p-2 hover:bg-[#EEEEEE]"
          onClick={other.onRequestClose}
        >
          <Cross width="24px" height="24px" />
        </button>
      </div>

      <div className="max-w-72">
        <img src={img} className="mb-5 max-h-[273px] object-cover" />
      </div>
      <h5 className="mb-2 font-black uppercase text-[#B5B5B5]">
        {price} БАЛЛОВ
      </h5>
      <h4 className="heading-3 mb-5 whitespace-pre-line">{name}</h4>
      <p className="mb-9 font-medium text-text-400">Категория: {category}</p>
      <p className="mb-6 text-[14px] text-text-300">{desc}</p>

      <hr className="mb-6 bg-[E2E2E2]" />

      <form onSubmit={onSubmit}>
        <Input
          label="Ваш id"
          placeholder="Укажите id"
          {...register("userId", { required: "Введите ваш id" })}
          error={errors.userId?.message}
        />

        <div className="flex flex-col gap-1">
          <div className="flex items-start gap-2 md:gap-5">
            <Controller
              control={control}
              name="count"
              rules={{
                min: { value: 1, message: "Выберите хотя бы один товар" },
              }}
              render={({ field }) => (
                <Counter
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.count?.message}
                />
              )}
            />
            <button className="btn-secondary min-h-[54px] w-full">
              Заказать
            </button>
          </div>

          <p className="sub-heading-4 text-red-600">{errors.count?.message}</p>
        </div>
      </form>

      <ModalPinCode
        isOpen={isPinCOdeModalOpen}
        onRequestClose={() => setIsPinCOdeModalOpen(false)}
      />
    </Modal>
  );
};

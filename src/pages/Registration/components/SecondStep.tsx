import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

import { FormMultiSelect } from "./FormMultiSelect";

import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";
import { FormSelect } from "./FormSelect";
import { FormTextArea } from "./FormTextArea";
import { FormField } from "./FormField";

const verticalOptions = [
  { value: "0", label: "Gambling" },
  { value: "1", label: "Betting" },
  { value: "2", label: "Nutra" },
  { value: "3", label: "Crypto" },
  { value: "4", label: "Dating" },
  { value: "5", label: "E-commerce" },
  { value: "6", label: "Gaming" },
  { value: "7", label: "Adult" },
  { value: "8", label: "Бинарные опционы/Forex" },
];

const trafficSourceOptions = [
  { value: "0", label: "Streams" },
  { value: "1", label: "PPC" },
  { value: "2", label: "Influence/Schemes" },
  { value: "3", label: "Fb app" },
  { value: "4", label: "In-app" },
  { value: "5", label: "ASO" },
  { value: "6", label: "UAC" },
  { value: "7", label: "УБТ" },
  { value: "8", label: "Push" },
  { value: "9", label: "SEO" },
  { value: "10", label: "Popunder" },
  { value: "11", label: "Capper" },
];

const trafficAmountOptions = [
  { value: "0", label: "До $1,000" },
  { value: "1", label: "$1,000-$10,000" },
  { value: "2", label: "$10,000+" },
];

interface SecondStepProps {
  form: UseFormReturn<RegistrationSecondStepFormValues, any, undefined>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  back: () => void;
}

export interface RegistrationSecondStepFormValues {
  vertical: string;
  trafficSource: string;
  trafficAmount: string;
  workExperience: string;
  promoCode: string;
  agreement: boolean;
}

export const SecondStep: React.FC<SecondStepProps> = ({
  form,
  onSubmit,
  back,
}) => {
  const { register, control } = form;

  return (
    <form className="mb-6 w-full" onSubmit={onSubmit}>
      <div className="mb-7 flex w-full flex-col gap-[10px]">
        <Controller
          control={control}
          name="vertical"
          render={({ field: { onChange, value } }) => (
            <FormMultiSelect
              label="Вертикаль"
              options={verticalOptions}
              value={verticalOptions.find((c) => c.value === value)}
              onChange={(val) => onChange((val as any).value)}
            />
          )}
        />

        <Controller
          control={control}
          name="trafficSource"
          render={({ field: { onChange, value } }) => (
            <FormMultiSelect
              label="Источник траффика"
              options={trafficSourceOptions}
              value={trafficSourceOptions.find((c) => c.value === value)}
              onChange={(val) => onChange((val as any).value)}
            />
          )}
        />

        <Controller
          control={control}
          name="trafficAmount"
          render={({ field: { onChange, value } }) => (
            <FormSelect
              label="Объем пролитого трафика за прошлый месяц"
              options={trafficAmountOptions}
              value={trafficAmountOptions.find((c) => c.value === value)}
              onChange={(val) => onChange((val as any).value)}
            />
          )}
        />

        <FormTextArea
          label="Опишите свой предыдущий опыт работы"
          placeholder="Опишите опыт работы"
          {...register("workExperience", { required: true })}
        />

        <FormField
          label="Промокод"
          placeholder="Укажите промокод"
          type="text"
          {...register("promoCode", { required: true })}
        />

        <label className="flex items-center gap-1 text-xs font-semibold text-[#B0B0B0] 3xl:text-lg">
          <input
            className="h-[14px] w-[14px] 3xl:h-5 3xl:w-5"
            type="checkbox"
            {...register("agreement", { required: true })}
          />
          Согласен(-на) с обработкой данных
        </label>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="flex items-center text-sm font-extrabold text-text-400 3xl:text-xl"
          onClick={back}
        >
          <ArrowLeft width="20px" height="20px" />
          Назад
        </button>
        <button className="btn-secondary" type="submit">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

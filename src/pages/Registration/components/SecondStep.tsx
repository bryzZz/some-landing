import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

import { FormMultiSelect } from "./FormMultiSelect";

import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";
import { FormSelect } from "./FormSelect";
import { FormTextArea } from "./FormTextArea";
import { Checkbox, FormField } from "components";
import {
  verticalOptions,
  trafficSourceOptions,
  trafficAmountOptions,
} from "constants/index";

interface SecondStepProps {
  form: UseFormReturn<RegistrationSecondStepFormValues, any, undefined>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  back: () => void;
}

export interface RegistrationSecondStepFormValues {
  vertical: string[];
  sourceTraffic: string[];
  volumeTraffic: string;
  workOld: string;
  promo: string;
  acceptTheHandler: boolean;
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
              value={verticalOptions.filter((c) => value?.includes(c.value))}
              onChange={(val) =>
                onChange((val as any[]).map(({ value }) => value))
              }
            />
          )}
        />

        <Controller
          control={control}
          name="sourceTraffic"
          render={({ field: { onChange, value } }) => (
            <FormMultiSelect
              label="Источник траффика"
              options={trafficSourceOptions}
              value={trafficSourceOptions.filter((c) =>
                value?.includes(c.value)
              )}
              onChange={(val) =>
                onChange((val as any[]).map(({ value }) => value))
              }
            />
          )}
        />

        <Controller
          control={control}
          name="volumeTraffic"
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
          {...register("workOld", { required: true })}
        />

        <FormField
          label="Промокод"
          placeholder="Укажите промокод"
          type="text"
          {...register("promo", { required: true })}
        />

        <Checkbox
          {...register("acceptTheHandler", { required: true })}
          label="Согласен(-на) с обработкой данных"
          variant="secondary"
        />
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

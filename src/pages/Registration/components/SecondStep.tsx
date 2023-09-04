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
  onSubmit: (data: RegistrationSecondStepFormValues) => void;
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
  onSubmit: topSubmit,
  back,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit((data) => {
    topSubmit(data);
  });

  return (
    <form className="mb-6 w-full" onSubmit={onSubmit}>
      <div className="mb-7 flex w-full flex-col gap-[10px]">
        <Controller
          control={control}
          name="vertical"
          rules={{ required: "Это обязательное поле" }}
          render={({ field: { onChange, value, ...other } }) => (
            <FormMultiSelect
              label="Вертикаль"
              options={verticalOptions}
              value={verticalOptions.filter((c) => value?.includes(c.value))}
              onChange={(val) =>
                onChange((val as any[]).map(({ value }) => value))
              }
              error={errors.vertical?.message}
              {...other}
            />
          )}
        />

        <Controller
          control={control}
          name="sourceTraffic"
          rules={{ required: "Это обязательное поле" }}
          render={({ field: { onChange, value, ...other } }) => (
            <FormMultiSelect
              label="Источник траффика"
              options={trafficSourceOptions}
              value={trafficSourceOptions.filter((c) =>
                value?.includes(c.value)
              )}
              onChange={(val) =>
                onChange((val as any[]).map(({ value }) => value))
              }
              error={errors.sourceTraffic?.message}
              {...other}
            />
          )}
        />

        <Controller
          control={control}
          name="volumeTraffic"
          rules={{ required: "Это обязательное поле" }}
          render={({ field: { onChange, value, ...other } }) => (
            <FormSelect
              label="Объем пролитого трафика за прошлый месяц"
              options={trafficAmountOptions}
              value={trafficAmountOptions.find((c) => c.value === value)}
              onChange={(val) => onChange((val as any).value)}
              error={errors.volumeTraffic?.message}
              {...other}
            />
          )}
        />

        <FormTextArea
          label="Опишите свой предыдущий опыт работы"
          placeholder="Опишите опыт работы"
          {...register("workOld", { required: "Это обязательное поле" })}
          error={errors.workOld?.message}
        />

        <FormField
          label="Промокод (если есть)"
          placeholder="Укажите промокод"
          type="text"
          {...register("promo")}
        />

        <Checkbox
          label="Согласен(-на) с обработкой данных"
          variant="secondary"
          {...register("acceptTheHandler", {
            required: "Это обязательное поле",
          })}
          error={errors.acceptTheHandler?.message}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="flex items-center text-sm font-extrabold text-text-400 3xl:text-base"
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

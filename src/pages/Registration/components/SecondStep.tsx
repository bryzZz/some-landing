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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
          rules={{ required: t("registration:requiredField") }}
          render={({ field: { onChange, value, ...other } }) => (
            <FormMultiSelect
              label={t("registration:vertical")}
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
          rules={{ required: t("registration:requiredField") }}
          render={({ field: { onChange, value, ...other } }) => (
            <FormMultiSelect
              label={t("registration:sourceTraffic")}
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
          rules={{ required: t("registration:requiredField") }}
          render={({ field: { onChange, value, ...other } }) => (
            <FormSelect
              label={t("registration:volumeTraffic")}
              options={trafficAmountOptions}
              value={trafficAmountOptions.find((c) => c.value === value)}
              onChange={(val) => onChange((val as any).value)}
              error={errors.volumeTraffic?.message}
              {...other}
            />
          )}
        />

        <FormTextArea
          label={t("registration:workOld")}
          placeholder={t("registration:workOld")}
          {...register("workOld", {
            required: t("registration:requiredField"),
          })}
          error={errors.workOld?.message}
        />

        <FormField
          label={t("registration:promo")}
          placeholder={t("registration:promo")}
          type="text"
          {...register("promo")}
        />

        <Checkbox
          label={t("registration:acceptTheHandler")}
          variant="secondary"
          {...register("acceptTheHandler", {
            required: t("registration:requiredField"),
          })}
          error={errors.acceptTheHandler?.message}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="flex items-center text-sm font-extrabold text-text-400"
          onClick={back}
        >
          <ArrowLeft width="20px" height="20px" />
          {t("registration:back")}
        </button>
        <button className="btn-secondary" type="submit">
          {t("registration:registration")}
        </button>
      </div>
    </form>
  );
};

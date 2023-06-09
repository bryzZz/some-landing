import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { BASE_PATH } from "constants/index";
import {
  FirstStep,
  RegistrationFirstStepFormValues,
  RegistrationSecondStepFormValues,
  SecondStep,
} from "./components";
import { TabPanel } from "components";

export const Registration: React.FC = () => {
  const [step, setStep] = useState(0);

  const firstStepForm = useForm<RegistrationFirstStepFormValues>();
  const secondStepForm = useForm<RegistrationSecondStepFormValues>();

  const handleSubmitFirstStep = firstStepForm.handleSubmit((data) => {
    console.log(data);

    setStep(1);
  });

  const handleSubmitSecondStep = secondStepForm.handleSubmit((data) => {
    console.log(data);
  });

  const back = () => {
    setStep((p) => Math.max(0, p - 1));
  };

  return (
    <div className="mx-4 flex w-full flex-col items-center rounded-3xl bg-text-100 p-10 shadow-400">
      <Link to={BASE_PATH} className="mb-9 block">
        <Logo />
      </Link>
      <h4 className="heading-4 mb-9">
        Регистрация. Шаг {step + 1}
        <span className="text-sm text-[#CBCBCB]">/2</span>
      </h4>

      <TabPanel className="w-full" value={0} tabValue={step}>
        <FirstStep form={firstStepForm} onSubmit={handleSubmitFirstStep} />
      </TabPanel>
      <TabPanel className="w-full" value={1} tabValue={step}>
        <SecondStep
          form={secondStepForm}
          onSubmit={handleSubmitSecondStep}
          back={back}
        />
      </TabPanel>

      <p className="text-sm text-[#000] ">
        У вас уже есть аккаунт?{" "}
        <Link className="text-[#088DF4] underline" to="login">
          Войти
        </Link>
      </p>
    </div>
  );
};

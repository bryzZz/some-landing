import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { BASE_PATH } from "constants/index";
import {
  FirstStep,
  RegistrationFirstStepFormValues,
  RegistrationSecondStepFormValues,
  SecondStep,
} from "./components";
import { ModalSuccessRegister, TabPanel } from "components";
import { RegistrationResponse } from "types";

export const Registration: React.FC = () => {
  const [returnManager, setReturnManager] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(0);

  const firstStepForm = useForm<RegistrationFirstStepFormValues>();
  const secondStepForm = useForm<RegistrationSecondStepFormValues>({
    defaultValues: {
      acceptTheHandler: true,
    },
  });

  const [firstStepData, setFirstStepData] =
    useState<RegistrationFirstStepFormValues | null>(null);

  const handleSubmitFirstStep = (data: RegistrationFirstStepFormValues) => {
    setFirstStepData(data);
    setStep(1);
  };

  const handleSubmitSecondStep = async (
    data: RegistrationSecondStepFormValues
  ) => {
    if (!firstStepData) return;

    const response = await axios.post<RegistrationResponse>(
      "http://5.63.155.73/tops/reg.php",
      {
        name: firstStepData.name,
        mail: firstStepData.mail,
        pass: firstStepData.pass,
        contactField: firstStepData.contactField,
        ...data,
      }
    );

    setReturnManager(response.data.return_manager);
    setIsOpen(true);
  };

  const back = () => {
    setStep((p) => Math.max(0, p - 1));
  };

  return (
    <>
      <div className="mx-4 flex w-full flex-col items-center rounded-3xl bg-text-100 p-10 shadow-400 3xl:p-14">
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

        <p className="text-sm text-[#000] 3xl:text-xl">
          У вас уже есть аккаунт?{" "}
          <Link
            className="text-[#088DF4] underline"
            to="https://leadshub.affise.com/v2/sign/in"
          >
            Войти
          </Link>
        </p>
      </div>
      <ModalSuccessRegister
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        returnManager={returnManager}
      />
    </>
  );
};

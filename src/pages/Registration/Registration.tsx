import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { RegistrationFirstStepResponse, RegistrationResponse } from "types";
import { useTranslation } from "react-i18next";

export const Registration: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [id, setId] = useState<string>("");
  const [returnManager, setReturnManager] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(0);

  const firstStepForm = useForm<RegistrationFirstStepFormValues>({
    defaultValues: {
      contactType: "telegram",
    },
  });
  const secondStepForm = useForm<RegistrationSecondStepFormValues>({
    defaultValues: {
      acceptTheHandler: true,
    },
  });

  const [firstStepData, setFirstStepData] =
    useState<RegistrationFirstStepFormValues | null>(null);

  const handleSubmitFirstStep = (data: RegistrationFirstStepFormValues) => {
    axios
      .post<RegistrationFirstStepResponse>("/tops/reg_check.php", {
        mail: data.mail,
        name: data.name,
        pass: data.pass,
      })
      .then((res) => {
        if (res.data && res.data[0] === "success") {
          setFirstStepData(data);
          setStep(1);
        } else {
          firstStepForm.setError("mail", {
            type: "custom",
            message: "Такая почта уже существует",
          });
        }
      });
  };

  const handleSubmitSecondStep = async (
    data: RegistrationSecondStepFormValues
  ) => {
    if (!firstStepData) return;

    const response = await axios.post<RegistrationResponse>("/tops/reg.php", {
      name: firstStepData.name,
      mail: firstStepData.mail,
      pass: firstStepData.pass,
      contactField: firstStepData.contactField,
      contactType: firstStepData.contactType,
      ...data,
    });

    setReturnManager(response.data.return_manager ?? "");
    setId(response.data.id.toString());
    setIsOpen(true);
  };

  const back = () => {
    setStep((p) => Math.max(0, p - 1));
  };

  const handleClose = () => {
    navigate(BASE_PATH);
    setIsOpen(false);
  };

  return (
    <>
      <div className="mx-4 flex w-full flex-col items-center rounded-3xl bg-text-100 p-5 shadow-400 md:p-10 3xl:p-12">
        <Link to={BASE_PATH} className="mb-4 block md:mb-9">
          <Logo />
        </Link>
        <h4 className="heading-4 mb-9">
          {t("registration:title")}
          {step + 1}
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

        <p className="text-sm text-[#000] 3xl:text-lg">
          {t("registration:haveAccount")}{" "}
          <Link
            className="text-[#088DF4] underline"
            to="https://leadshub.affise.com/v2/sign/in"
          >
            {t("registration:login")}
          </Link>
        </p>
      </div>
      <ModalSuccessRegister
        isOpen={isOpen}
        onRequestClose={handleClose}
        id={id}
        returnManager={returnManager}
      />
    </>
  );
};

import { forwardRef, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import * as Popover from "@radix-ui/react-popover";

import { FormField, FormFieldProps } from "components";

import { ReactComponent as Correct } from "assets/icons/correct.svg";
import { ReactComponent as Incorrect } from "assets/icons/incorrect.svg";

export const PasswordField = forwardRef<HTMLInputElement, FormFieldProps>(
  (props, ref) => {
    const { formState } = useFormContext();

    const [isOpen, setIsOpen] = useState(false);

    const [firstError, setFirstError] = useState(false);
    const [secondError, setSecondError] = useState(false);
    const [thirdError, setThirdError] = useState(false);

    const checkLength = (value: string) => {
      return value.length > 8;
    };

    const checkLetters = (value: string) => {
      return !!value.match(/[a-z]/g) && !!value.match(/[A-Z]/g);
    };

    const checkSymbols = (value: string) => {
      return !!value.match(/[0-9]/g) && !!value.match(/[@$!%*?&#]/g);
    };

    const getIcon = (isError: boolean) => {
      return isError ? (
        <Incorrect width={11} height={11} className="shrink-0" />
      ) : (
        <Correct width={11} height={11} className="shrink-0" />
      );
    };

    useEffect(() => {
      if (formState.isSubmitted && (firstError || secondError || thirdError)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, [firstError, formState.isSubmitted, secondError, thirdError]);

    useEffect(() => {
      if (!formState.isSubmitted || typeof props.value !== "string") return;

      setFirstError(!checkLength(props.value));
      setSecondError(!checkLetters(props.value));
      setThirdError(!checkSymbols(props.value));
    }, [formState.isSubmitted, props.value]);

    return (
      <Popover.Root open={isOpen}>
        <Popover.Anchor asChild>
          <FormField ref={ref as any} {...props} />
        </Popover.Anchor>

        <Popover.Portal>
          <Popover.Content
            onOpenAutoFocus={(e) => e.preventDefault()}
            side="right"
            className="z-20 max-w-[268px] rounded-xl bg-white p-3 shadow-200 will-change-[transform,opacity] data-[state=open]:data-[side=right]:animate-slideLeftAndFade"
            sideOffset={5}
          >
            <div className="flex flex-col gap-1 text-xs text-text-300">
              <p className="flex items-center gap-2">
                {getIcon(firstError)} 8 символов
              </p>
              <p className="flex items-center gap-2">
                {getIcon(secondError)} латинские заглавные и маленькие буквы
              </p>
              <p className="flex items-center gap-2">
                {getIcon(thirdError)} минимум одна цифра и спец. символ @$!%*?&#
              </p>
            </div>

            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);

import React, { useState } from "react";

import { ReactComponent as ArrowRight } from "assets/icons/question-arrow-right.svg";
import { twMerge } from "tailwind-merge";

interface FAQAccordionProps {
  header: string;
  content: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  header,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((p) => !p);

  return (
    <div
      className="cursor-pointer select-none rounded-2xl bg-[#F9F9F9] p-[30px]"
      onClick={toggle}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-[18px] font-bold leading-5 text-[#000]">
          {header}
        </h4>
        <ArrowRight className={twMerge("transition", isOpen && "rotate-90")} />
      </div>

      <p
        className={twMerge(
          "sub-heading-4 block overflow-hidden transition-all",
          isOpen ? "max-h-[1000px] pt-[15px]" : "max-h-0"
        )}
      >
        {content}
      </p>
    </div>
  );
};

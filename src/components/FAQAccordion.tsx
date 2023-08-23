import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import { ReactComponent as ArrowRight } from "assets/icons/question-arrow-right.svg";

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
      className={twMerge(
        "cursor-pointer select-none rounded-2xl p-[30px] transition-colors",
        isOpen && "bg-[#F9F9F9]"
      )}
      onClick={toggle}
    >
      <div className="flex items-center justify-between">
        <h4 className="heading-4 text-black">{header}</h4>
        <ArrowRight className={twMerge("transition", isOpen && "rotate-90")} />
      </div>

      <p
        className={twMerge(
          "sub-heading-4 block overflow-hidden whitespace-pre-wrap transition-all",
          isOpen ? "max-h-[1000px] pt-[15px]" : "max-h-0"
        )}
      >
        {content}
      </p>
    </div>
  );
};

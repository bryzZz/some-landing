import React from "react";
import { twMerge } from "tailwind-merge";

import { ReactComponent as ArrowRight } from "assets/icons/question-arrow-right.svg";

interface FAQAccordionProps {
  header: string;
  content: string;

  isOpen: boolean;
  onClick: () => void;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  header,
  content,

  isOpen,
  onClick,
}) => {
  return (
    <div
      className={twMerge(
        "cursor-pointer select-none rounded-2xl p-[30px] transition-colors",
        isOpen && "bg-[#F9F9F9]"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h4
          className="heading-4 mr-2 text-black"
          dangerouslySetInnerHTML={{ __html: header }}
        />
        <ArrowRight className={twMerge("transition", isOpen && "rotate-90")} />
      </div>

      <p
        className={twMerge(
          "sub-heading-4 block overflow-hidden whitespace-pre-wrap transition-all",
          isOpen ? "max-h-[1000px] pt-[15px]" : "max-h-0"
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

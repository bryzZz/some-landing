import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import { FAQAccordion } from "./FAQAccordion";

interface FAQSectionProps {
  label: string;
  questions: {
    heading: string;
    solution: string;
  }[];

  currentGroup: boolean;
  currentQuestion: number;

  triggerReset: number;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  label,
  questions,
  currentGroup,
  currentQuestion,
  triggerReset,
}) => {
  const [active, setActive] = useState(() => questions.map((_, i) => i === 0));

  const handleClick = (index: number) => {
    setActive((p) =>
      p.map((value, i) => {
        if (i === index) return !value;

        return value;
      })
    );
  };

  useEffect(() => {
    if (currentGroup) {
      setActive((p) =>
        p.map((value, i) => {
          if (i === currentQuestion) return true;

          return value;
        })
      );
    }
  }, [currentGroup, currentQuestion]);

  useEffect(() => {
    setActive((p) => p.map((_, i) => i === 0));
  }, [triggerReset]);

  return (
    <>
      <Fade direction="up" duration={500} triggerOnce>
        <h2 className="heading-2 mb-[70px] text-center">
          {label}
          <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
        </h2>
      </Fade>
      <div className="flex flex-col gap-4">
        <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
          {questions.map(({ heading, solution }, i) => (
            <FAQAccordion
              key={i}
              isOpen={active[i]}
              // isOpen={activeIndex === i}
              onClick={() => handleClick(i)}
              header={heading}
              content={solution}
            />
          ))}
        </Fade>
      </div>
    </>
  );
};

import React, { useState } from "react";

const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };
  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goto = (index) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex !== 0,
    isLastStep: currentStepIndex >= steps.length-1,
    next,
    back,
    goto,
  };
};

export default useMultiStepForm;

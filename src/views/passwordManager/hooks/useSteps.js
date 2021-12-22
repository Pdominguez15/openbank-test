import { useCallback, useEffect, useState } from "react";

export function useSteps(initialSteps) {
  const [steps, setSteps] = useState(initialSteps);
  const [activeStep, setActiveStep] = useState(0);

  const getStepActive = useCallback(() => {
    return steps.findIndex((step) => step.active === true);
  }, [steps]);

  useEffect(() => {
    setActiveStep(getStepActive());
  }, [steps, getStepActive]);

  const nextStep = () => {
    const index = getStepActive();

    const stepsUpdated = JSON.parse(JSON.stringify(steps));

    stepsUpdated[index].active = false;
    stepsUpdated[index].completed = true;
    stepsUpdated[index + 1].active = true;
    setSteps([...stepsUpdated]);
  };

  const resetSteps = () => {
    setSteps([...initialSteps]);
  };

  return { steps, nextStep, resetSteps, activeStep };
}

import { useState } from "react";

export const useCounter = (inicialState = 10) => {
  const [state, setState] = useState(inicialState);

  const handleAdd = (factor = 1) => {
    setState(state + factor);
  };

  const handleReset = () => {
    setState(inicialState);
  };
  const handleSubstract = (factor =1) => {
    setState(state - factor);
  };
  return {
    handleAdd,
    handleReset,
    state,
    handleSubstract,
  };
};

import { useState } from "react";

const useValidate = (validateValue) => {
  // Declare const state for enteredValue equal to empty string
  const [enteredValue, setEnteredValue] = useState("");
  // Declare const state for isTouched equal to false
  const [isTouched, setIsTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // Declare valueIsValid const that calls a function validateValue on enterdValue
  const valueIsValid = validateValue(enteredValue);
  // Declare hasError const that evalutes is not valueIsValid and isTouched
  const hasError = !valueIsValid && isTouched;
  // Declare valueChangeHandler event function and setEnteredValue to event target value

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  // Declare inputBlurHandler event function and setIsTouched to true and call setErrorMessage
  const inputBlurHandler = (e) => {
    setIsTouched(true);
    setErrorMessage();
  };
  // Declare reset function that setEnteredValue back to empty string and setIsTouched back to false
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  // return object of keys and values
  return {
    //  value to enteredValue, hasError to hasError, isValid to valueIsValue, valueChangeHandler to valueChangeHandler, inputBlurHandler to inputBlurHandler, reset to reset
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    errorMessage,
  };
};

export default useValidate;

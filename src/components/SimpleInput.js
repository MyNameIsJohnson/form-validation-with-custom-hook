import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // set state for entered name
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.length > 6);

  const passwordCheck =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "" && passwordCheck.test(value));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredPasswordIsValid
    ) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <div className={nameInputClasses}>
          <input
            type="text"
            id="name"
            placeholder="First Name"
            onChange={nameChangeHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && <p className="error-text">Must be filled</p>}
        </div>
        <div className={emailInputClasses}>
          <input
            type="text"
            id="name"
            placeholder="Email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={emailBlurHandler}
          />
        </div>
        {emailInputHasError && <p className="error-text">Must be filled</p>}
        <div className={passwordInputClasses}>
          <input
            type="text"
            id="name"
            placeholder="Password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={passwordBlurHandler}
          />
          {passwordInputHasError && (
            <ul className="error-text">
              <li>Must have 1 or more uppercase</li>
              <li>Must have 1 or more number</li>
              <li>Must inlucde speacial symbol</li>
              <li>Must inlucde 8 or more characters</li>
            </ul>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

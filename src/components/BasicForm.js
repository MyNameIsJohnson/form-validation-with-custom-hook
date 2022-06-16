import useValidate from "../hooks/validate";

const BasicForm = (props) => {
  // Call useValidate and extract values from the result returned by useValidate. Since it returns an object we can use object destructuring to pull out those keys from the returned object and store the values in new constants. Extract the value and assign const alias.
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
    errorMessage: firstNameErrorMessage = "First Name must be added",
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
    errorMessage: lastNameErrorMessage = "Last Name Must Be Included",
  } = useValidate((value) => value.trim() !== "");

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    errorMessage: emailErrorMessage = "Email must be valid",
  } = useValidate((value) => regEx.test(value));

  // Declare a variable for formIsValid to a boolean
  let formIsValid = false;
  // If the entered value being checked is true, set formIsValid to true
  if (enteredFirstName && enteredLastName && enteredEmail) {
    formIsValid = true;
  }
  // Declare formSubmissionHandler with event preventDefault.
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    // If entered value is not true, end function with a return
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }
    // reset value input by calling reset function from validate.js
    firstNameReset("");
    lastNameReset("");
    emailReset("");
  };
  // Conditionally render error message and add style to input
  const nameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameHasError && (
            <p className="error-text">{firstNameErrorMessage}</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">{lastNameErrorMessage}</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && <p className="error-text">{emailErrorMessage}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

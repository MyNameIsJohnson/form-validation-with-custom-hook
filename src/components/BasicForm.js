import useValidate from "../hooks/validate";

const BasicForm = (props) => {
  // create a const object to grab all the values from validate.js and make it equal to useValidate function that checks if the value meets validation condition
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useValidate((value) => value.trim() !== "");

  // Declare a variable for formIsValid to a boolean

  let formIsValid = false;

  // If the entered value being checked is true, set formIsValid to true

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // Declare formSubmissionHandler with event preventDefault.
  // If entered value is not true, end function with a return
  // reset value input by calling reset function from validate.js
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
  };

  // Conditionally render the error
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
          />
          {nameInputHasError && <p className="error-text">Must be filled</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

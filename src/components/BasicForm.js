import useValidate from "../hooks/validate";

const BasicForm = (props) => {
  // Call useValidate and extract values from the result returned by useValidate. Since it returns an object we can use object destructuring to pull out those keys from the returned object and store the values in new constants. Extract the value and assign const alias.
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
    errorMessage: message = "Name must be added",
  } = useValidate((value) => value.trim() !== "");
  // Declare a variable for formIsValid to a boolean
  let formIsValid = false;
  // If the entered value being checked is true, set formIsValid to true
  if (enteredName) {
    formIsValid = true;
  }
  // Declare formSubmissionHandler with event preventDefault.
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredName);
    // If entered value is not true, end function with a return
    if (!nameIsValid) {
      return;
    }
    // reset value input by calling reset function from validate.js
    nameReset("");
  };
  // Conditionally render error message and add style to input
  const nameInputClasses = nameHasError
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
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          {nameHasError && <p className="error-text">{message}</p>}
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

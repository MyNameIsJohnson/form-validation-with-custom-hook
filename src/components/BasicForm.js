import useValidate from "../hooks/validate";

const BasicForm = (props) => {
  // Call useValidate and extract values from the result returned by useValidate. Since it returns an object we can use object destructuring to pull out those keys from the returned object and store the values in new constants. Extract the value and assign const alias.

  // Declare a variable for formIsValid to a boolean

  // If the entered value being checked is true, set formIsValid to true

  // Declare formSubmissionHandler with event preventDefault.
  // If entered value is not true, end function with a return
  // reset value input by calling reset function from validate.js

  // Conditionally render error message and add style to input

  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

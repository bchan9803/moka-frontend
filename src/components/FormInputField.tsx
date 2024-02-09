const FormInputField = (props) => {
  return (
    <label className="form-control w-full max-w-xs mt-4">
      <div className="label">
        <span className="font-medium text-lg label-text">{props.inputLabel}</span>
      </div>

      <input
        id={props.inputId}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        className="input input-bordered w-full max-w-xs"
        value={props.inputVal}
        onChange={props.inputOnChangeEvent}
      />
    </label>
  );
};

export default FormInputField;
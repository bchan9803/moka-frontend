const PublishRecipeFormInputField = (props) => {
  return (
    <section>
      <div className="label text-xl font-bold">
        <span className='label-text'>{props.formLabel}</span>
      </div>
      <input
        type={props.formType}
        id={props.formId}
        name={props.formName}
        placeholder={props.formPlaceholder}
        className="input input-bordered w-full max-w-xs"
        onChange={props.formOnChange}
      />
    </section>
  );
};

export default PublishRecipeFormInputField;
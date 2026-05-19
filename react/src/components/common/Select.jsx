function Select({ label, options = [], value, onChange }) {
  let id = "select";
  if (label) {
    id = label.toLowerCase().split(" ").join("-");
  }

  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="select"
        aria-label={label || "Select an option"}
      >
        <option value="">Select {label}</option>
        {options.map((option) => {
          const optionValue = option.value ?? option;
          const optionLabel = option.label ?? option;
          return (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;

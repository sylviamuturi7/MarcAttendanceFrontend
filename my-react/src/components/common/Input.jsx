function Input({ label, type, placeholder, value, onChange, className }) {
  let id = "input";
  if (label) {
    id = label.toLowerCase().split(" ").join("-");
  }

  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

export default Input;

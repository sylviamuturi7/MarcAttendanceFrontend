// A counter ensures unique IDs even when the same label is used more than once on a page
let inputIdCounter = 0;

function Input({ label, type, placeholder, value, onChange, className }) {

  const id = label
    ? `${label.toLowerCase().split(" ").join("-")}-${++inputIdCounter}`
    : `input-${++inputIdCounter}`;

  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
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

function Button({ text, onClick, type, className, ariaLabel }) {
  return (
    <button type={type || "button"} onClick={onClick} className={className} aria-label={ariaLabel}>
      {text}
    </button>
  );
}

export default Button;
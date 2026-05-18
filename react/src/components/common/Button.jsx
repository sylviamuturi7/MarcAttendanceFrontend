function Button({ children, onClick, type, className, ariaLabel }) {
  return (
    <button type={type || "button"} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
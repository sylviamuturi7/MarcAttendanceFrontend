import React, { useState } from "react";

const PasswordField = ({ value, onChange, placeholder = "Password" }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="password-field">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button type="button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordField;
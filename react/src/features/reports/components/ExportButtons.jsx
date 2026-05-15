import { useState } from "react";

function ExportButton({ onClick, disabled, label = "Export Detailed CSV" }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (!onClick) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" onClick={handleClick} disabled={disabled || loading}>
      {loading ? "Exporting..." : label}
    </button>
  );
}

export default ExportButton;

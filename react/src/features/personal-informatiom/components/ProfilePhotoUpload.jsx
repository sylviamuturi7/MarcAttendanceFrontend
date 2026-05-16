import { useState } from "react";

function ProfilePhotoUpload({ onUpload }) {
  const [error, setError] = useState("");

  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setError("No file selected.");
      return;
    }
    setError("");
    onUpload(file);
  }

  return (
    <div className="photo-upload">
      <label>Profile Photo</label>
      <input type="file" accept="image/*" onChange={handleChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ProfilePhotoUpload;

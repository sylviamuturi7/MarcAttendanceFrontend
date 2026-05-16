function isValidEmail(email) {
  if (!email) return false;
  return email.includes("@") && email.includes(".");
}

function isValidMacAddress(mac) {
  if (!mac) return false;
  const parts = mac.split(":");
  return parts.length === 6;
}

export { isValidEmail, isValidMacAddress };

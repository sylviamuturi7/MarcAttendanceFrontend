// Validatean email address using a proper regex pattern by checking email format
// Validates a MAC address in the standard XX:XX:XX:XX:XX:XX format

function isValidEmail(email) {
  if (!email) return false;
  // This regex checks for a proper email format: chars@chars.chars
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidMacAddress(mac) {
  if (!mac) return false;
  const macRegex = /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/;
  return macRegex.test(mac);
}

export { isValidEmail, isValidMacAddress };

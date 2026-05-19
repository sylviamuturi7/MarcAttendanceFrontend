function formatDate(date) {
  if (!date) return "No date";
  if (isNaN(new Date(date))) return "Invalid date";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default formatDate;

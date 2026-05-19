function calculateAttendance(present, total) {
  if (!present || !total) return 0;
  return Math.round((present / total) * 100);
}

export { calculateAttendance };

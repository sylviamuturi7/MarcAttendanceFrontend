//Will have to use Binary Large Object (Blob) to represent raw data in the browser and create a downloadable file for the CSV file.
function exportCSV(csvString, filename) {
  if (!csvString || !filename) return;

  const blob = new Blob([csvString], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename + ".csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export { exportCSV };

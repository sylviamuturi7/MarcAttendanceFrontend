function DeviceCard({ device }) {
  if (!device) return <p>No device found.</p>;

  return (
    <div className="card">
      <h3>{device.name || "Unknown Device"}</h3>
      <p><strong>MAC Address:</strong> {device.macAddress || "N/A"}</p>
      <p><strong>Status:</strong> {device.status || "N/A"}</p>
    </div>
  );
}

export { DeviceCard };

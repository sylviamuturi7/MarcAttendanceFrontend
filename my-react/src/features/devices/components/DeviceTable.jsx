function DeviceTable({ devices }) {
  if (!devices || devices.length === 0) return <p>No devices found.</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Device Name</th>
          <th>MAC Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <tr key={device.macAddress}>
            <td>{device.name ?? "No data"}</td>
            <td>{device.macAddress ?? "No data"}</td>
            <td>{device.status ?? "No data"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { DeviceTable };

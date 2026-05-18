import { useState, useEffect } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import { DeviceTable } from "../components/DeviceTable";
import { DeviceFilters } from "../components/DeviceFilters";
import { getDevices } from "../deviceService";

function Devices() {
  const [devices, setDevices] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function fetchDevices() {
      const data = await getDevices();
      setDevices(data);
    }
    fetchDevices();
  }, []);

  return (
    <DashboardLayout>
      <PageHeader title="Devices" />
      <DeviceFilters status={status} onStatusChange={setStatus} />
      <DeviceTable devices={devices} />
    </DashboardLayout>
  );
}

export default Devices;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import { DeviceCard } from "../components/DeviceCard";
import { getDeviceByMac } from "../deviceService";

function DeviceDetails() {
  const { macAddress } = useParams();
  const [device, setDevice] = useState(null);

  useEffect(() => {
    async function fetchDevice() {
      const data = await getDeviceByMac(macAddress);
      setDevice(data);
    }
    fetchDevice();
  }, [macAddress]);

  return (
    <DashboardLayout>
      <PageHeader title="Device Details" />
      <DeviceCard device={device} />
    </DashboardLayout>
  );
}

export default DeviceDetails;

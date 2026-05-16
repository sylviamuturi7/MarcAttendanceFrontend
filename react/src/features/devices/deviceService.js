import api from "../../../services/api";

async function getDevices() {
  try {
    const response = await api.get("/devices");
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function getDeviceByMac(macAddress) {
  try {
    const response = await api.get(`/devices/${macAddress}`);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function registerDevice(deviceData) {
  try {
    const response = await api.post("/devices", deviceData);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function updateDeviceStatus(macAddress, status) {
  try {
    const response = await api.patch(`/devices/${macAddress}`, { status });
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function removeDevice(macAddress) {
  try {
    const response = await api.delete(`/devices/${macAddress}`);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

export { getDevices, getDeviceByMac, registerDevice, updateDeviceStatus, removeDevice };
const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000",
  APP_NAME: import.meta.env.VITE_APP_NAME || "MARC",
  ENV: import.meta.env.VITE_ENV || "development",
};

export { env };

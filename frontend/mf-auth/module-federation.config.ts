export const mfConfig = {
  name: "mf_auth",
  exposes: {
    "./auth": "./src/App.tsx",
  },
  dts: false,
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router-dom": { singleton: true },
    "@mf/shared": { singleton: true, requiredVersion: false as false },
  },
};

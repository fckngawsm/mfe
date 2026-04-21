export const mfConfig = {
  name: "mf_auth",
  exposes: {
    "./auth": "./src/App.tsx",
  },
  dts: false,
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router": { singleton: true, requiredVersion: false as false },
    "react-router-dom": { singleton: true, requiredVersion: false as false },
    "@mf/shared": { singleton: true, requiredVersion: false as false },
  },
};

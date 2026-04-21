export const mfConfig = {
  name: "mf_users",
  exposes: {
    "./users": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router": { singleton: true, requiredVersion: false as false },
    "react-router-dom": { singleton: true, requiredVersion: false as false },
    "@mf/shared": { singleton: true, requiredVersion: false as false },
  },
  dts: false,
};

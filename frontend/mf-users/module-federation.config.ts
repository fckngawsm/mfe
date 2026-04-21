export const mfConfig = {
  name: "mf_users",
  exposes: {
    "./users": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "@mf/shared": { singleton: true, requiredVersion: false as false },
  },
  dts: false,
};

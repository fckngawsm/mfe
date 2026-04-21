export const mfConfig = {
  name: "mf_cards",
  exposes: {
    "./cards": "./src/App.tsx",
  },
  dts: false,
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "@mf/shared": { singleton: true, requiredVersion: false as false },
  },
};

export const mfConfig = {
  name: "mf-users",
  exposes: {
    "./users": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "@mf/shared": { singleton: true },
  },
};

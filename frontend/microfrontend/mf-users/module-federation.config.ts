export const mfConfig = {
  name: "mf-users",
  exposes: {
    "./users": "./src/App.tsx",
  },
  shared: ["react", "react-dom"],
};

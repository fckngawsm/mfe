export const mfConfig = {
  name: "mf_auth",
  exposes: {
    "./mf-auth": "./src/App.tsx",
  },
  shared: ["react", "react-dom"],
};

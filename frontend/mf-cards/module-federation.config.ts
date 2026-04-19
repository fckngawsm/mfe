export const mfConfig = {
  name: "mf_cards",
  exposes: {
    "./mf-cards": "./src/App.tsx",
  },
  remotes: {
    host: "host@http://localhost:8080/index.ts",
  },
  shared: ["react", "react-dom"],
};

export const mfConfig = {
  name: "mf_root",
  exposes: {},
  shared: ["react", "react-dom"],
  plugins: {
    remotes: {
      "mf-cards": "mf-cards@http://localhost:8081/App.js",
      "mf-users": "mf-users@http://localhost:8082/App.js",
      "mf-auth": "mf-auth@http://localhost:8083/App.js",
    },
  },
};

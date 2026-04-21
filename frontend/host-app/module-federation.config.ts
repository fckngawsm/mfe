export const mfConfig = {
  name: "host",
  exposes: {
    "./AuthContext": "./src/shared/contexts/CurrentUserContext",
    "./InfoTooltip": "./src/shared/components/InfoTooltip",
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    "react-dom": { singleton: true, requiredVersion: false },
    "react-router": { singleton: true },
  },
  plugins: {
    remotes: {
      "mf-cards": "mf-cards@http://localhost:8081/App.js",
      "mf-users": "mf-users@http://localhost:8082/App.js",
      "mf-auth": "mf-auth@http://localhost:8083/App.js",
    },
  },
};

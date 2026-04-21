export const mfConfig = {
  name: "host",
  remotes: {
    "mf-cards": "mf_cards@http://localhost:8081/mf-manifest.json",
    "mf-users": "mf_users@http://localhost:8082/mf-manifest.json",
    "mf-auth": "mf_auth@http://localhost:8083/mf-manifest.json",
  },
  dts: false,
  shared: {
    react: { singleton: true, requiredVersion: false as false },
    "react-dom": { singleton: true, requiredVersion: false as false },
    "react-router": { singleton: true, requiredVersion: false as false },
    "react-router-dom": { singleton: true, requiredVersion: false as false },
    "@mf/shared": { singleton: true, requiredVersion: false as false },
  },
};

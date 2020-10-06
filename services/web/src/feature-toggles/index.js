import { featureTogglesStore } from "./store";

export const FEATURE_TOGGLES = {
  vipWelcome: {
    name: "feature_vip_welcome",
  },
};

//we need a function to initialize the remote config,
//fetch the latest values and activate them on the client.
export const initFeatureToggles = async () => {
  const remoteConfig = window.firebase.remoteConfig();
  await remoteConfig.fetchAndActivate();
  setFeatureTogglesStore(remoteConfig.getAll());
  return remoteConfig;
};

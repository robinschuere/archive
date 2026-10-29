export type FeatureFlag = {
  [key: string]: string
}

const enabledFeatures = (featureFlagNames: string[]) => {
  return featureFlagNames.map(name => FeatureFlag[name]).filter(boolean);
}

export const hasFeature = (featureFlagNames: string[]) => {
  const features = enabledFeatures(featureFlagNames);
  return (featureName: string) => {
    return features[featureName];
  };
};

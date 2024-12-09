export type FeatureFlag = {
  [key: string]: string
}

const FeatureFlags: FeatureFlag = {
  FEATURE_A_WORKS_AS_INTENDED: 'The feature works with all steps included',
  FEATURE_B_STEP_1: 'Step 1 of the feature is enabled',
  FEATURE_B_STEP_2: 'Step 2 of the feature is enabled',
  FEATURE_B_WORKS_AS_INTENDED: 'The feature works with all steps included',
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

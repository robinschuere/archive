import { FeatureProvider, useFeatureContext } from './FeatureContext';
import { FeatureA, FeatureB } from '@features';

import features from './FeatureFlags';

// code sample from a feature (Mind that the feature knows of the context!)
const FeatureA = () => {
  const context = useFeatureContext();

  if (context.hasFeature('FEATURE_C_WORKS_AS_INTENDED')) {
    return <ACOMPLEXCOMPONENT />
  }
  return null;
};


const Example = () => {
  return <FeatureProvider features={features}>
    <FeatureA />
    <FeatureB />
    <FeatureC />
  </FeatureProvider>
}

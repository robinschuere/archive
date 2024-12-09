import FeatureProvider from './FeatureContext';
import { FeatureA, FeatureB } from '@features';

import features from './FeatureFlags';

const Example = () => {
  return <FeatureProvider features={features}>
    <FeatureA />
    <FeatureB />
  </FeatureProvider>
}

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export const useInitializeHook = <T>(
  defaultValue: T,
  onInitialize: (dependencies: any[]) => T,
  dependencies: any[]
): [value: T, Dispatch<SetStateAction<T>>] => {
  const [{ isInitialized, value }, setState] = useState<{
    isInitialized: boolean;
    value: T;
  }>({ isInitialized: false, value: defaultValue });

  useEffect(() => {
    if (!isInitialized && dependencies.every(s => !!s)) {
      console.log('Initializing value, dependencies are loaded');
      setState({ isInitialized: true, value: onInitialize(dependencies) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  const setValue = (newValue: T | ((prevValue: T) => T)) => {
    if (typeof newValue !== 'function') {
      setState({ isInitialized: true, value: newValue });
      return;
    }
    setState(prev => {
      const updated = (newValue as Function)(prev.value);
      return { isInitialized: true, value: updated };
    });
  };

  return [value, setValue];
};

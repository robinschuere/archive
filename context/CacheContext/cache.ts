import { DataValue, CachedData, CachedDataConfig } from './types';

const cachedValues: CachedData = {};

// get the stored cached data
const getLocalStorageData=(key: string) => {
  const storage = localStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage)
  }
  return { data: [] };
}

// save the current data
const setLocalStorageData = (key: string, value: DataValue) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getCachedData = await (key: string) => {
  if (!cachedValues[key]) {
    throw new Error('CachedValues retrieved before setting configuration. Did you forgot to initialize the model?');
  }
  
  return cachedValues[key];
}

const setCachedValue = (key: string, data: [], refreshAfter?: number) => {
  cachedValues[key].data = data;
  cachedValues[key].refreshAfter = refreshAfter || new Date().valueOf() + cachedValues[key].cacheTimeInMs;
  setLocalStorageData(key, cachedValues[key]);
}

const setDataFromLocalStorageOrRequest = async (key: string, overrule?: boolean): Promise<void> => {
  // get the local stored data first before retrieving the new data.
  const localStorageData = getLocalStorageData(key);
  if (!overrule && localStorageData) {
    if (localStorageData.data.length > 0 && new Date().valueOf() < localStorageData.refreshAfter) {
      setCachedValue(key, localStorageData.data, localStorage.refreshData);
      return;
    }
  }
  
  return get()
    .then(result => setCachedValue(key, result)
    .catch((ex) => {
      if (onError) {
        onError(ex);
      } else {
        console.warn('You see this message due to a configuration without an onError functionality. A log error will be generated.');
        console.error(ex);
      }
    });
}

export const getData = async (key: string) => {
  const { data } = getCachedData(key);
  if (data.length === 0) {
    setTimeout(() => setDataFromLocalStorageOrRequest(key), 1);
  }
  return data;
}

export const initialize = (dataConfig: CachedDataConfig) => {
  Object.keys(dataConfig).forEach((key) => {
    cachedValues[key] = {
      data: [],
      ...dataConfig[key],
      refreshAfter: new Date().valueOf() + dataConfig[key].cacheTimeInMs,
    };
    setTimeout(() => setDataFromLocalStorageOrRequest(key), 1);
  });
}

export const checkData = () => {
  Object.keys(cachedValues)
    .filter(key => new Date().valueOf() > cachedValues[key].refreshAfter)
    .forEach(key => {
      setTimeout(() => setDataFromLocalStorageOrRequest(key, true), 1);
    });
}

export const refreshData = () => {
  Object.keys(cachedValues).forEach((key) => {
     setTimeout(() => setDataFromLocalStorageOrRequest(key, true), 1);
  })
};

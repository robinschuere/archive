type DataConfig = {
  strategy: CacheStrategy;
  get: () => Promise<any>;
  onError: () => void;
  cacheTimeInMs: number;
}

type DataValue = DataConfig & {
  refreshAfter: number;
}

export type CachedDataConfig = Record<string, DataConfig>

export type CachedData = Record<string, DataValue>

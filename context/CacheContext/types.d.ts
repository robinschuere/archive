type DataConfig = {
  strategy: CacheStrategy;
  get: () => Promise<any>;
  onError?: (ex: unknown) => Promise<void>;
  cacheTimeInMs: number;
}

export type DataValue = DataConfig & {
  refreshAfter: number;
}

export type CachedDataConfig = Record<string, DataConfig>

export type CachedData = Record<string, DataValue>

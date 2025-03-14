type CacheStratgy = {
  type: 'refresh';
  timeInMs: number;
}

type DataConfig = {
  strategy: CacheStrategy;
  get: () => Promise<any>;
  onError: () => void;
}

export type CachedDataConfig = Record<string, DataConfig>

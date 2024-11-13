type BaseEntity = {
  id: string;
  updatedAt?: number;
  removedAt?: number;
}

export type ActionContext<T extends BaseEntity> = {
  [key: string]: {
    get: (id: string) => Promise<T>;
    update: (id: string, params: any[]) => Promise<void>;
    remove: (id: string) => Promise<void>;
    insert: (id: string, params: any[]) => Promise<void>;
    check: (params: any[]) => Promise<boolean>;
  }
}

export type OfflineValue = {
  contextValue: string;
  contextAction: 'update' | 'remove' | 'insert';
  id: string;
  params: any[];
  time: number;
}

export type StateValue = {
  [key: number]: OffLineValue
}

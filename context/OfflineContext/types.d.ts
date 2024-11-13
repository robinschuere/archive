export type BaseEntity = {
  id: string;
  updatedAt?: number;
  removedAt?: number;
}

export type ActionContext = {
  [key: string]: {
    get: (id: string) => Promise<BaseEntity>;
    update: (id: string, params: any[]) => Promise<void>;
    remove: (id: string) => Promise<void>;
    insert: (id: string, params: any[]) => Promise<void>;
    check: (params: any[]) => Promise<Boolean>;
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

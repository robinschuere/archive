export type BaseEntity = {
  id: string;
  updatedAt?: number;
  removedAt?: number;
}

export type ActionContext = {
  get: (id: string) => Promise<BaseEntity>;
  update: (id: string, params: any[]) => Promise<void>;
  remove: (id: string) => Promise<void>;
  insert: (id: string, params: any[]) => Promise<void>;
  checkInsert: (params: any[]) => Promise<Boolean>;
  checkUpdate: (id: string, params: any[]) => Promise<Boolean>;
  checkRemove: (id: string) => Promise<Boolean>;
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

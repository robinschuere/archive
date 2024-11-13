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

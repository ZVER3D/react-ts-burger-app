import { createContext } from 'react';
import { DrawerStore } from './DrawerStore';

export class RootStore {
  // TODO: make it computed
  // @observable isAuthenticated: boolean = false;

  drawer = new DrawerStore();
}

export const RootContext = createContext(new RootStore());

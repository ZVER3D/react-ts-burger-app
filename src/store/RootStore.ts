import { createContext } from 'react';
import { BurgerStore } from './BurgerStore';
import { DrawerStore } from './DrawerStore';

export class RootStore {
  // TODO: make it computed
  // @observable isAuthenticated: boolean = false;

  drawer = new DrawerStore();
  burger = new BurgerStore();
}

export const RootContext = createContext(new RootStore());

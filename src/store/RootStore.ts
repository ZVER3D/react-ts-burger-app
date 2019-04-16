import { createContext } from 'react';
import { BurgerStore } from './BurgerStore';
import { DrawerStore } from './DrawerStore';
import { UserStore } from './UserStore';

export class RootStore {
  user = new UserStore();
  drawer = new DrawerStore();
  burger = new BurgerStore();
}

export const RootContext = createContext(new RootStore());

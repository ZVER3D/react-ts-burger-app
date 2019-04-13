import { observable } from 'mobx';
import { createContext } from 'react';

class Store {
  // TODO: make it computed
  @observable isAuthenticated: boolean = false;
}

export const RootStore = createContext(new Store());

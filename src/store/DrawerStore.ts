import { action, observable } from 'mobx';

export class DrawerStore {
  @observable isOpen: boolean = false;

  @action.bound close() {
    this.isOpen = false;
  }

  @action.bound toggle() {
    this.isOpen = !this.isOpen;
  }
}

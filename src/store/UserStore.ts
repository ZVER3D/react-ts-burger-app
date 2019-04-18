import { action, computed, observable } from 'mobx';

export class UserStore {
  @observable email: string = '';
  @observable name: string = '';
  @observable address: string = '';
  @observable deliveryMethod: string = '';
  @observable phone: string = '';

  @observable redirect: boolean = false;

  @computed get isAuthenticated() {
    return this.email !== '';
  }

  @action.bound fillUser({ email, name, address, deliveryMethod, phone }: Partial<UserStore>) {
    this.email = email!;
    this.name = name || '';
    this.address = address || '';
    this.deliveryMethod = deliveryMethod || '';
    this.phone = phone || '';
  }

  @action.bound logoutUser() {
    this.email = '';
    this.name = '';
    this.address = '';
    this.deliveryMethod = '';
    this.phone = '';
  }
}

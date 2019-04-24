import { action, computed, observable } from 'mobx';
import { IngredientType } from '../components/burger/BurgerIngredient';

export interface IIngredients {
  [x: string]: number;
}

export class BurgerStore {
  @observable ingredients: IIngredients = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  };

  prices: IIngredients = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  };

  @computed get totalPrice() {
    return Object.entries(this.ingredients).reduce(
      (acc, [ingr, cost]) => acc + cost * this.prices[ingr],
      0
    );
  }

  @computed get purchasable() {
    return this.totalPrice > 0;
  }

  @action.bound fillPrices(prices: IIngredients) {
    this.prices = prices;
  }

  @action.bound addIngredient(ingr: IngredientType) {
    this.ingredients[ingr]++;
  }

  @action.bound removeIngredient(ingr: IngredientType) {
    if (this.ingredients[ingr] === 0) {
      return;
    }
    this.ingredients[ingr]--;
  }

  @action.bound clearIngredients() {
    this.ingredients = {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    };
  }
}

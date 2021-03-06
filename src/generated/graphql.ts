type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type EditUserInput = {
  name: Scalars["String"];
  address: Scalars["String"];
  phone: Scalars["String"];
  deliveryMethod: Scalars["String"];
};

export type Ingredient = {
  name: Scalars["String"];
  amount: Scalars["Int"];
};

export type IngredientInput = {
  name: Scalars["String"];
  amount: Scalars["Int"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  order: Scalars["Boolean"];
  editUser: Scalars["Boolean"];
  login: User;
  logout: Scalars["Boolean"];
  register: User;
};

export type MutationOrderArgs = {
  data: OrderInput;
};

export type MutationEditUserArgs = {
  data: EditUserInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type Order = {
  id: Scalars["ID"];
  date: Scalars["DateTime"];
  price: Scalars["Float"];
  name: Scalars["String"];
  address: Scalars["String"];
  phone: Scalars["String"];
  deliveryMethod: Scalars["String"];
  user: User;
  ingredients: Array<Ingredient>;
};

export type OrderInput = {
  name: Scalars["String"];
  ingredients: Array<IngredientInput>;
  address: Scalars["String"];
  phone: Scalars["String"];
  deliveryMethod: Scalars["String"];
};

export type Price = {
  cheese: Scalars["Float"];
  salad: Scalars["Float"];
  bacon: Scalars["Float"];
  meat: Scalars["Float"];
};

export type Query = {
  orders?: Maybe<Array<Order>>;
  getPrices: Price;
  me: User;
};

export type RegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type User = {
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  address: Scalars["String"];
  deliveryMethod: Scalars["String"];
  phone: Scalars["String"];
  orders: Array<Order>;
};
export type EditUserMutationVariables = {
  address: Scalars["String"];
  name: Scalars["String"];
  deliveryMethod: Scalars["String"];
  phone: Scalars["String"];
};

export type EditUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "editUser"
>;

export type LoginMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "User" } & Pick<
    User,
    "email" | "name" | "address" | "deliveryMethod" | "phone"
  >;
};

export type LogoutMutationVariables = {};

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export type OrderMutationVariables = {
  ingredients: Array<IngredientInput>;
  address: Scalars["String"];
  phone: Scalars["String"];
  deliveryMethod: Scalars["String"];
  name: Scalars["String"];
};

export type OrderMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "order"
>;

export type RegisterMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "User" } & Pick<
    User,
    "email" | "name" | "deliveryMethod"
  >;
};

export type GetPricesQueryVariables = {};

export type GetPricesQuery = { __typename?: "Query" } & {
  getPrices: { __typename?: "Price" } & Pick<
    Price,
    "salad" | "meat" | "cheese" | "bacon"
  >;
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: "Query" } & {
  me: { __typename?: "User" } & Pick<
    User,
    "email" | "name" | "address" | "deliveryMethod" | "phone"
  >;
};

export type OrdersQueryVariables = {};

export type OrdersQuery = { __typename?: "Query" } & {
  orders: Maybe<
    Array<
      { __typename?: "Order" } & Pick<Order, "id" | "date" | "price"> & {
          ingredients: Array<
            { __typename?: "Ingredient" } & Pick<Ingredient, "name" | "amount">
          >;
        }
    >
  >;
};

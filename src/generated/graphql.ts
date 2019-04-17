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

export type Ing = {
  name: Scalars["String"];
  amount: Scalars["Int"];
};

export type Ingredient = {
  name: Scalars["String"];
  amount: Scalars["Int"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  order: Scalars["Boolean"];
  login: User;
  logout: Scalars["Boolean"];
  register: User;
};

export type MutationOrderArgs = {
  ingredients?: Maybe<Array<Ing>>;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type Order = {
  id: Scalars["ID"];
  date?: Maybe<Scalars["DateTime"]>;
  price: Scalars["Int"];
  user: User;
  ingredients: Array<Ingredient>;
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
  orders: Array<Order>;
};
export type LoginMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "User" } & Pick<User, "email" | "name">;
};

export type LogoutMutationVariables = {};

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export type OrderMutationVariables = {
  ingredients?: Maybe<Array<Ing>>;
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
  register: { __typename?: "User" } & Pick<User, "email" | "name">;
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
    "id" | "email" | "name" | "address" | "deliveryMethod"
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

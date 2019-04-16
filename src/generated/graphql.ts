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

export type Ingredient = {
  id: Scalars["ID"];
  name: Scalars["String"];
  amount: Scalars["Int"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  login: User;
  logout: Scalars["Boolean"];
  register: User;
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
  price: Scalars["Int"];
  user: User;
  ingredients: Array<Ingredient>;
};

export type Query = {
  orders?: Maybe<Array<Order>>;
  me: User;
};

export type RegisterInput = {
  name: Scalars["String"];
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
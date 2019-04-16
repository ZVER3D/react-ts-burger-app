
type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
  login: User,
  logout: Scalars['Boolean'],
  register: User,
};


export type MutationLoginArgs = {
  data: LoginInput
};


export type MutationRegisterArgs = {
  data: RegisterInput
};

export type Query = {
  me: User,
};

export type RegisterInput = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export type User = {
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
};
export type MeQueryVariables = {};


export type MeQuery = ({ __typename?: 'Query' } & { me: ({ __typename?: 'User' } & Pick<User, 'id' | 'email' | 'name'>) });

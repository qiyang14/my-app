/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHistoricalTransactionInput = {
  id?: string | null,
  day?: number | null,
  symbol?: string | null,
  action?: string | null,
  price?: number | null,
  qty?: number | null,
  totalValue?: number | null,
  userID: string,
  historicalTransactionStockId?: string | null,
};

export type ModelHistoricalTransactionConditionInput = {
  day?: ModelIntInput | null,
  symbol?: ModelStringInput | null,
  action?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  qty?: ModelIntInput | null,
  totalValue?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelHistoricalTransactionConditionInput | null > | null,
  or?: Array< ModelHistoricalTransactionConditionInput | null > | null,
  not?: ModelHistoricalTransactionConditionInput | null,
  historicalTransactionStockId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type HistoricalTransaction = {
  __typename: "HistoricalTransaction",
  id: string,
  day?: number | null,
  symbol?: string | null,
  action?: string | null,
  price?: number | null,
  qty?: number | null,
  totalValue?: number | null,
  userID: string,
  Stock?: Stock | null,
  createdAt: string,
  updatedAt: string,
  historicalTransactionStockId?: string | null,
};

export type Stock = {
  __typename: "Stock",
  id: string,
  symbol?: string | null,
  price?: Array< number | null > | null,
  day?: number | null,
  open?: Array< number | null > | null,
  high?: Array< number | null > | null,
  low?: Array< number | null > | null,
  close?: Array< number | null > | null,
  volume?: Array< number | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHistoricalTransactionInput = {
  id: string,
  day?: number | null,
  symbol?: string | null,
  action?: string | null,
  price?: number | null,
  qty?: number | null,
  totalValue?: number | null,
  userID?: string | null,
  historicalTransactionStockId?: string | null,
};

export type DeleteHistoricalTransactionInput = {
  id: string,
};

export type CreateStockInput = {
  id?: string | null,
  symbol?: string | null,
  price?: Array< number | null > | null,
  day?: number | null,
  open?: Array< number | null > | null,
  high?: Array< number | null > | null,
  low?: Array< number | null > | null,
  close?: Array< number | null > | null,
  volume?: Array< number | null > | null,
};

export type ModelStockConditionInput = {
  symbol?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  day?: ModelIntInput | null,
  open?: ModelFloatInput | null,
  high?: ModelFloatInput | null,
  low?: ModelFloatInput | null,
  close?: ModelFloatInput | null,
  volume?: ModelFloatInput | null,
  and?: Array< ModelStockConditionInput | null > | null,
  or?: Array< ModelStockConditionInput | null > | null,
  not?: ModelStockConditionInput | null,
};

export type UpdateStockInput = {
  id: string,
  symbol?: string | null,
  price?: Array< number | null > | null,
  day?: number | null,
  open?: Array< number | null > | null,
  high?: Array< number | null > | null,
  low?: Array< number | null > | null,
  close?: Array< number | null > | null,
  volume?: Array< number | null > | null,
};

export type DeleteStockInput = {
  id: string,
};

export type CreateUserHoldingInput = {
  id?: string | null,
  stocks?: Array< string | null > | null,
  purchasePrice?: Array< number | null > | null,
  qty?: Array< number | null > | null,
  totalValue?: Array< number | null > | null,
};

export type ModelUserHoldingConditionInput = {
  stocks?: ModelStringInput | null,
  purchasePrice?: ModelFloatInput | null,
  qty?: ModelIntInput | null,
  totalValue?: ModelFloatInput | null,
  and?: Array< ModelUserHoldingConditionInput | null > | null,
  or?: Array< ModelUserHoldingConditionInput | null > | null,
  not?: ModelUserHoldingConditionInput | null,
};

export type UserHolding = {
  __typename: "UserHolding",
  id: string,
  stocks?: Array< string | null > | null,
  purchasePrice?: Array< number | null > | null,
  qty?: Array< number | null > | null,
  totalValue?: Array< number | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserHoldingInput = {
  id: string,
  stocks?: Array< string | null > | null,
  purchasePrice?: Array< number | null > | null,
  qty?: Array< number | null > | null,
  totalValue?: Array< number | null > | null,
};

export type DeleteUserHoldingInput = {
  id: string,
};

export type CreateUserPerformanceInput = {
  id?: string | null,
  accountValue?: number | null,
  cash?: number | null,
  todayChange?: number | null,
  annualReturn?: number | null,
  performance?: Array< number | null > | null,
};

export type ModelUserPerformanceConditionInput = {
  accountValue?: ModelFloatInput | null,
  cash?: ModelFloatInput | null,
  todayChange?: ModelFloatInput | null,
  annualReturn?: ModelFloatInput | null,
  performance?: ModelFloatInput | null,
  and?: Array< ModelUserPerformanceConditionInput | null > | null,
  or?: Array< ModelUserPerformanceConditionInput | null > | null,
  not?: ModelUserPerformanceConditionInput | null,
};

export type UserPerformance = {
  __typename: "UserPerformance",
  id: string,
  accountValue?: number | null,
  cash?: number | null,
  todayChange?: number | null,
  annualReturn?: number | null,
  performance?: Array< number | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserPerformanceInput = {
  id: string,
  accountValue?: number | null,
  cash?: number | null,
  todayChange?: number | null,
  annualReturn?: number | null,
  performance?: Array< number | null > | null,
};

export type DeleteUserPerformanceInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  password?: string | null,
  email?: string | null,
  userUserPerformanceId?: string | null,
  userUserHoldingId?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  password?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userUserPerformanceId?: ModelIDInput | null,
  userUserHoldingId?: ModelIDInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  password?: string | null,
  email?: string | null,
  UserHistoricalTransaction?: ModelHistoricalTransactionConnection | null,
  UserPerformance?: UserPerformance | null,
  UserHolding?: UserHolding | null,
  createdAt: string,
  updatedAt: string,
  userUserPerformanceId?: string | null,
  userUserHoldingId?: string | null,
};

export type ModelHistoricalTransactionConnection = {
  __typename: "ModelHistoricalTransactionConnection",
  items:  Array<HistoricalTransaction | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  password?: string | null,
  email?: string | null,
  userUserPerformanceId?: string | null,
  userUserHoldingId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelHistoricalTransactionFilterInput = {
  id?: ModelIDInput | null,
  day?: ModelIntInput | null,
  symbol?: ModelStringInput | null,
  action?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  qty?: ModelIntInput | null,
  totalValue?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelHistoricalTransactionFilterInput | null > | null,
  or?: Array< ModelHistoricalTransactionFilterInput | null > | null,
  not?: ModelHistoricalTransactionFilterInput | null,
  historicalTransactionStockId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStockFilterInput = {
  id?: ModelIDInput | null,
  symbol?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  day?: ModelIntInput | null,
  open?: ModelFloatInput | null,
  high?: ModelFloatInput | null,
  low?: ModelFloatInput | null,
  close?: ModelFloatInput | null,
  volume?: ModelFloatInput | null,
  and?: Array< ModelStockFilterInput | null > | null,
  or?: Array< ModelStockFilterInput | null > | null,
  not?: ModelStockFilterInput | null,
};

export type ModelStockConnection = {
  __typename: "ModelStockConnection",
  items:  Array<Stock | null >,
  nextToken?: string | null,
};

export type ModelUserHoldingFilterInput = {
  id?: ModelIDInput | null,
  stocks?: ModelStringInput | null,
  purchasePrice?: ModelFloatInput | null,
  qty?: ModelIntInput | null,
  totalValue?: ModelFloatInput | null,
  and?: Array< ModelUserHoldingFilterInput | null > | null,
  or?: Array< ModelUserHoldingFilterInput | null > | null,
  not?: ModelUserHoldingFilterInput | null,
};

export type ModelUserHoldingConnection = {
  __typename: "ModelUserHoldingConnection",
  items:  Array<UserHolding | null >,
  nextToken?: string | null,
};

export type ModelUserPerformanceFilterInput = {
  id?: ModelIDInput | null,
  accountValue?: ModelFloatInput | null,
  cash?: ModelFloatInput | null,
  todayChange?: ModelFloatInput | null,
  annualReturn?: ModelFloatInput | null,
  performance?: ModelFloatInput | null,
  and?: Array< ModelUserPerformanceFilterInput | null > | null,
  or?: Array< ModelUserPerformanceFilterInput | null > | null,
  not?: ModelUserPerformanceFilterInput | null,
};

export type ModelUserPerformanceConnection = {
  __typename: "ModelUserPerformanceConnection",
  items:  Array<UserPerformance | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  password?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userUserPerformanceId?: ModelIDInput | null,
  userUserHoldingId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionHistoricalTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  day?: ModelSubscriptionIntInput | null,
  symbol?: ModelSubscriptionStringInput | null,
  action?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  qty?: ModelSubscriptionIntInput | null,
  totalValue?: ModelSubscriptionFloatInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHistoricalTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionHistoricalTransactionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStockFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  symbol?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  day?: ModelSubscriptionIntInput | null,
  open?: ModelSubscriptionFloatInput | null,
  high?: ModelSubscriptionFloatInput | null,
  low?: ModelSubscriptionFloatInput | null,
  close?: ModelSubscriptionFloatInput | null,
  volume?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionStockFilterInput | null > | null,
  or?: Array< ModelSubscriptionStockFilterInput | null > | null,
};

export type ModelSubscriptionUserHoldingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stocks?: ModelSubscriptionStringInput | null,
  purchasePrice?: ModelSubscriptionFloatInput | null,
  qty?: ModelSubscriptionIntInput | null,
  totalValue?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionUserHoldingFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserHoldingFilterInput | null > | null,
};

export type ModelSubscriptionUserPerformanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountValue?: ModelSubscriptionFloatInput | null,
  cash?: ModelSubscriptionFloatInput | null,
  todayChange?: ModelSubscriptionFloatInput | null,
  annualReturn?: ModelSubscriptionFloatInput | null,
  performance?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionUserPerformanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserPerformanceFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateHistoricalTransactionMutationVariables = {
  input: CreateHistoricalTransactionInput,
  condition?: ModelHistoricalTransactionConditionInput | null,
};

export type CreateHistoricalTransactionMutation = {
  createHistoricalTransaction?:  {
    __typename: "HistoricalTransaction",
    id: string,
    day?: number | null,
    symbol?: string | null,
    action?: string | null,
    price?: number | null,
    qty?: number | null,
    totalValue?: number | null,
    userID: string,
    Stock?:  {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    historicalTransactionStockId?: string | null,
  } | null,
};

export type UpdateHistoricalTransactionMutationVariables = {
  input: UpdateHistoricalTransactionInput,
  condition?: ModelHistoricalTransactionConditionInput | null,
};

export type UpdateHistoricalTransactionMutation = {
  updateHistoricalTransaction?:  {
    __typename: "HistoricalTransaction",
    id: string,
    day?: number | null,
    symbol?: string | null,
    action?: string | null,
    price?: number | null,
    qty?: number | null,
    totalValue?: number | null,
    userID: string,
    Stock?:  {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    historicalTransactionStockId?: string | null,
  } | null,
};

export type DeleteHistoricalTransactionMutationVariables = {
  input: DeleteHistoricalTransactionInput,
  condition?: ModelHistoricalTransactionConditionInput | null,
};

export type DeleteHistoricalTransactionMutation = {
  deleteHistoricalTransaction?:  {
    __typename: "HistoricalTransaction",
    id: string,
    day?: number | null,
    symbol?: string | null,
    action?: string | null,
    price?: number | null,
    qty?: number | null,
    totalValue?: number | null,
    userID: string,
    Stock?:  {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    historicalTransactionStockId?: string | null,
  } | null,
};

export type CreateStockMutationVariables = {
  input: CreateStockInput,
  condition?: ModelStockConditionInput | null,
};

export type CreateStockMutation = {
  createStock?:  {
    __typename: "Stock",
    id: string,
    symbol?: string | null,
    price?: Array< number | null > | null,
    day?: number | null,
    open?: Array< number | null > | null,
    high?: Array< number | null > | null,
    low?: Array< number | null > | null,
    close?: Array< number | null > | null,
    volume?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStockMutationVariables = {
  input: UpdateStockInput,
  condition?: ModelStockConditionInput | null,
};

export type UpdateStockMutation = {
  updateStock?:  {
    __typename: "Stock",
    id: string,
    symbol?: string | null,
    price?: Array< number | null > | null,
    day?: number | null,
    open?: Array< number | null > | null,
    high?: Array< number | null > | null,
    low?: Array< number | null > | null,
    close?: Array< number | null > | null,
    volume?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStockMutationVariables = {
  input: DeleteStockInput,
  condition?: ModelStockConditionInput | null,
};

export type DeleteStockMutation = {
  deleteStock?:  {
    __typename: "Stock",
    id: string,
    symbol?: string | null,
    price?: Array< number | null > | null,
    day?: number | null,
    open?: Array< number | null > | null,
    high?: Array< number | null > | null,
    low?: Array< number | null > | null,
    close?: Array< number | null > | null,
    volume?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserHoldingMutationVariables = {
  input: CreateUserHoldingInput,
  condition?: ModelUserHoldingConditionInput | null,
};

export type CreateUserHoldingMutation = {
  createUserHolding?:  {
    __typename: "UserHolding",
    id: string,
    stocks?: Array< string | null > | null,
    purchasePrice?: Array< number | null > | null,
    qty?: Array< number | null > | null,
    totalValue?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserHoldingMutationVariables = {
  input: UpdateUserHoldingInput,
  condition?: ModelUserHoldingConditionInput | null,
};

export type UpdateUserHoldingMutation = {
  updateUserHolding?:  {
    __typename: "UserHolding",
    id: string,
    stocks?: Array< string | null > | null,
    purchasePrice?: Array< number | null > | null,
    qty?: Array< number | null > | null,
    totalValue?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserHoldingMutationVariables = {
  input: DeleteUserHoldingInput,
  condition?: ModelUserHoldingConditionInput | null,
};

export type DeleteUserHoldingMutation = {
  deleteUserHolding?:  {
    __typename: "UserHolding",
    id: string,
    stocks?: Array< string | null > | null,
    purchasePrice?: Array< number | null > | null,
    qty?: Array< number | null > | null,
    totalValue?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserPerformanceMutationVariables = {
  input: CreateUserPerformanceInput,
  condition?: ModelUserPerformanceConditionInput | null,
};

export type CreateUserPerformanceMutation = {
  createUserPerformance?:  {
    __typename: "UserPerformance",
    id: string,
    accountValue?: number | null,
    cash?: number | null,
    todayChange?: number | null,
    annualReturn?: number | null,
    performance?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserPerformanceMutationVariables = {
  input: UpdateUserPerformanceInput,
  condition?: ModelUserPerformanceConditionInput | null,
};

export type UpdateUserPerformanceMutation = {
  updateUserPerformance?:  {
    __typename: "UserPerformance",
    id: string,
    accountValue?: number | null,
    cash?: number | null,
    todayChange?: number | null,
    annualReturn?: number | null,
    performance?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserPerformanceMutationVariables = {
  input: DeleteUserPerformanceInput,
  condition?: ModelUserPerformanceConditionInput | null,
};

export type DeleteUserPerformanceMutation = {
  deleteUserPerformance?:  {
    __typename: "UserPerformance",
    id: string,
    accountValue?: number | null,
    cash?: number | null,
    todayChange?: number | null,
    annualReturn?: number | null,
    performance?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    password?: string | null,
    email?: string | null,
    UserHistoricalTransaction?:  {
      __typename: "ModelHistoricalTransactionConnection",
      nextToken?: string | null,
    } | null,
    UserPerformance?:  {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    UserHolding?:  {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserPerformanceId?: string | null,
    userUserHoldingId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    password?: string | null,
    email?: string | null,
    UserHistoricalTransaction?:  {
      __typename: "ModelHistoricalTransactionConnection",
      nextToken?: string | null,
    } | null,
    UserPerformance?:  {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    UserHolding?:  {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserPerformanceId?: string | null,
    userUserHoldingId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    password?: string | null,
    email?: string | null,
    UserHistoricalTransaction?:  {
      __typename: "ModelHistoricalTransactionConnection",
      nextToken?: string | null,
    } | null,
    UserPerformance?:  {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    UserHolding?:  {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserPerformanceId?: string | null,
    userUserHoldingId?: string | null,
  } | null,
};

export type GetHistoricalTransactionQueryVariables = {
  id: string,
};

export type GetHistoricalTransactionQuery = {
  getHistoricalTransaction?:  {
    __typename: "HistoricalTransaction",
    id: string,
    day?: number | null,
    symbol?: string | null,
    action?: string | null,
    price?: number | null,
    qty?: number | null,
    totalValue?: number | null,
    userID: string,
    Stock?:  {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    historicalTransactionStockId?: string | null,
  } | null,
};

export type ListHistoricalTransactionsQueryVariables = {
  filter?: ModelHistoricalTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHistoricalTransactionsQuery = {
  listHistoricalTransactions?:  {
    __typename: "ModelHistoricalTransactionConnection",
    items:  Array< {
      __typename: "HistoricalTransaction",
      id: string,
      day?: number | null,
      symbol?: string | null,
      action?: string | null,
      price?: number | null,
      qty?: number | null,
      totalValue?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      historicalTransactionStockId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HistoricalTransactionsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHistoricalTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HistoricalTransactionsByUserIDQuery = {
  historicalTransactionsByUserID?:  {
    __typename: "ModelHistoricalTransactionConnection",
    items:  Array< {
      __typename: "HistoricalTransaction",
      id: string,
      day?: number | null,
      symbol?: string | null,
      action?: string | null,
      price?: number | null,
      qty?: number | null,
      totalValue?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      historicalTransactionStockId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStockQueryVariables = {
  id: string,
};

export type GetStockQuery = {
  getStock?:  {
    __typename: "Stock",
    id: string,
    symbol?: string | null,
    price?: Array< number | null > | null,
    day?: number | null,
    open?: Array< number | null > | null,
    high?: Array< number | null > | null,
    low?: Array< number | null > | null,
    close?: Array< number | null > | null,
    volume?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStocksQueryVariables = {
  filter?: ModelStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStocksQuery = {
  listStocks?:  {
    __typename: "ModelStockConnection",
    items:  Array< {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserHoldingQueryVariables = {
  id: string,
};

export type GetUserHoldingQuery = {
  getUserHolding?:  {
    __typename: "UserHolding",
    id: string,
    stocks?: Array< string | null > | null,
    purchasePrice?: Array< number | null > | null,
    qty?: Array< number | null > | null,
    totalValue?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserHoldingsQueryVariables = {
  filter?: ModelUserHoldingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserHoldingsQuery = {
  listUserHoldings?:  {
    __typename: "ModelUserHoldingConnection",
    items:  Array< {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserPerformanceQueryVariables = {
  id: string,
};

export type GetUserPerformanceQuery = {
  getUserPerformance?:  {
    __typename: "UserPerformance",
    id: string,
    accountValue?: number | null,
    cash?: number | null,
    todayChange?: number | null,
    annualReturn?: number | null,
    performance?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserPerformancesQueryVariables = {
  filter?: ModelUserPerformanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPerformancesQuery = {
  listUserPerformances?:  {
    __typename: "ModelUserPerformanceConnection",
    items:  Array< {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    password?: string | null,
    email?: string | null,
    UserHistoricalTransaction?:  {
      __typename: "ModelHistoricalTransactionConnection",
      nextToken?: string | null,
    } | null,
    UserPerformance?:  {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    UserHolding?:  {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserPerformanceId?: string | null,
    userUserHoldingId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      password?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      userUserPerformanceId?: string | null,
      userUserHoldingId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateHistoricalTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionHistoricalTransactionFilterInput | null,
};

export type OnCreateHistoricalTransactionSubscription = {
  onCreateHistoricalTransaction?:  {
    __typename: "HistoricalTransaction",
    id: string,
    day?: number | null,
    symbol?: string | null,
    action?: string | null,
    price?: number | null,
    qty?: number | null,
    totalValue?: number | null,
    userID: string,
    Stock?:  {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    historicalTransactionStockId?: string | null,
  } | null,
};

export type OnUpdateHistoricalTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionHistoricalTransactionFilterInput | null,
};

export type OnUpdateHistoricalTransactionSubscription = {
  onUpdateHistoricalTransaction?:  {
    __typename: "HistoricalTransaction",
    id: string,
    day?: number | null,
    symbol?: string | null,
    action?: string | null,
    price?: number | null,
    qty?: number | null,
    totalValue?: number | null,
    userID: string,
    Stock?:  {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    historicalTransactionStockId?: string | null,
  } | null,
};

export type OnDeleteHistoricalTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionHistoricalTransactionFilterInput | null,
};

export type OnDeleteHistoricalTransactionSubscription = {
  onDeleteHistoricalTransaction?:  {
    __typename: "HistoricalTransaction",
    id: string,
    day?: number | null,
    symbol?: string | null,
    action?: string | null,
    price?: number | null,
    qty?: number | null,
    totalValue?: number | null,
    userID: string,
    Stock?:  {
      __typename: "Stock",
      id: string,
      symbol?: string | null,
      price?: Array< number | null > | null,
      day?: number | null,
      open?: Array< number | null > | null,
      high?: Array< number | null > | null,
      low?: Array< number | null > | null,
      close?: Array< number | null > | null,
      volume?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    historicalTransactionStockId?: string | null,
  } | null,
};

export type OnCreateStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
};

export type OnCreateStockSubscription = {
  onCreateStock?:  {
    __typename: "Stock",
    id: string,
    symbol?: string | null,
    price?: Array< number | null > | null,
    day?: number | null,
    open?: Array< number | null > | null,
    high?: Array< number | null > | null,
    low?: Array< number | null > | null,
    close?: Array< number | null > | null,
    volume?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
};

export type OnUpdateStockSubscription = {
  onUpdateStock?:  {
    __typename: "Stock",
    id: string,
    symbol?: string | null,
    price?: Array< number | null > | null,
    day?: number | null,
    open?: Array< number | null > | null,
    high?: Array< number | null > | null,
    low?: Array< number | null > | null,
    close?: Array< number | null > | null,
    volume?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
};

export type OnDeleteStockSubscription = {
  onDeleteStock?:  {
    __typename: "Stock",
    id: string,
    symbol?: string | null,
    price?: Array< number | null > | null,
    day?: number | null,
    open?: Array< number | null > | null,
    high?: Array< number | null > | null,
    low?: Array< number | null > | null,
    close?: Array< number | null > | null,
    volume?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserHoldingSubscriptionVariables = {
  filter?: ModelSubscriptionUserHoldingFilterInput | null,
};

export type OnCreateUserHoldingSubscription = {
  onCreateUserHolding?:  {
    __typename: "UserHolding",
    id: string,
    stocks?: Array< string | null > | null,
    purchasePrice?: Array< number | null > | null,
    qty?: Array< number | null > | null,
    totalValue?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserHoldingSubscriptionVariables = {
  filter?: ModelSubscriptionUserHoldingFilterInput | null,
};

export type OnUpdateUserHoldingSubscription = {
  onUpdateUserHolding?:  {
    __typename: "UserHolding",
    id: string,
    stocks?: Array< string | null > | null,
    purchasePrice?: Array< number | null > | null,
    qty?: Array< number | null > | null,
    totalValue?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserHoldingSubscriptionVariables = {
  filter?: ModelSubscriptionUserHoldingFilterInput | null,
};

export type OnDeleteUserHoldingSubscription = {
  onDeleteUserHolding?:  {
    __typename: "UserHolding",
    id: string,
    stocks?: Array< string | null > | null,
    purchasePrice?: Array< number | null > | null,
    qty?: Array< number | null > | null,
    totalValue?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserPerformanceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPerformanceFilterInput | null,
};

export type OnCreateUserPerformanceSubscription = {
  onCreateUserPerformance?:  {
    __typename: "UserPerformance",
    id: string,
    accountValue?: number | null,
    cash?: number | null,
    todayChange?: number | null,
    annualReturn?: number | null,
    performance?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserPerformanceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPerformanceFilterInput | null,
};

export type OnUpdateUserPerformanceSubscription = {
  onUpdateUserPerformance?:  {
    __typename: "UserPerformance",
    id: string,
    accountValue?: number | null,
    cash?: number | null,
    todayChange?: number | null,
    annualReturn?: number | null,
    performance?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserPerformanceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPerformanceFilterInput | null,
};

export type OnDeleteUserPerformanceSubscription = {
  onDeleteUserPerformance?:  {
    __typename: "UserPerformance",
    id: string,
    accountValue?: number | null,
    cash?: number | null,
    todayChange?: number | null,
    annualReturn?: number | null,
    performance?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    password?: string | null,
    email?: string | null,
    UserHistoricalTransaction?:  {
      __typename: "ModelHistoricalTransactionConnection",
      nextToken?: string | null,
    } | null,
    UserPerformance?:  {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    UserHolding?:  {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserPerformanceId?: string | null,
    userUserHoldingId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    password?: string | null,
    email?: string | null,
    UserHistoricalTransaction?:  {
      __typename: "ModelHistoricalTransactionConnection",
      nextToken?: string | null,
    } | null,
    UserPerformance?:  {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    UserHolding?:  {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserPerformanceId?: string | null,
    userUserHoldingId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    password?: string | null,
    email?: string | null,
    UserHistoricalTransaction?:  {
      __typename: "ModelHistoricalTransactionConnection",
      nextToken?: string | null,
    } | null,
    UserPerformance?:  {
      __typename: "UserPerformance",
      id: string,
      accountValue?: number | null,
      cash?: number | null,
      todayChange?: number | null,
      annualReturn?: number | null,
      performance?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    UserHolding?:  {
      __typename: "UserHolding",
      id: string,
      stocks?: Array< string | null > | null,
      purchasePrice?: Array< number | null > | null,
      qty?: Array< number | null > | null,
      totalValue?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserPerformanceId?: string | null,
    userUserHoldingId?: string | null,
  } | null,
};

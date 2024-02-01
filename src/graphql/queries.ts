/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getHistoricalTransaction = /* GraphQL */ `query GetHistoricalTransaction($id: ID!) {
  getHistoricalTransaction(id: $id) {
    id
    day
    symbol
    action
    price
    qty
    totalValue
    userID
    Stock {
      id
      symbol
      price
      day
      open
      high
      low
      close
      volume
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    historicalTransactionStockId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHistoricalTransactionQueryVariables,
  APITypes.GetHistoricalTransactionQuery
>;
export const listHistoricalTransactions = /* GraphQL */ `query ListHistoricalTransactions(
  $filter: ModelHistoricalTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listHistoricalTransactions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      day
      symbol
      action
      price
      qty
      totalValue
      userID
      createdAt
      updatedAt
      historicalTransactionStockId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHistoricalTransactionsQueryVariables,
  APITypes.ListHistoricalTransactionsQuery
>;
export const historicalTransactionsByUserID = /* GraphQL */ `query HistoricalTransactionsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelHistoricalTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  historicalTransactionsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      day
      symbol
      action
      price
      qty
      totalValue
      userID
      createdAt
      updatedAt
      historicalTransactionStockId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HistoricalTransactionsByUserIDQueryVariables,
  APITypes.HistoricalTransactionsByUserIDQuery
>;
export const getStock = /* GraphQL */ `query GetStock($id: ID!) {
  getStock(id: $id) {
    id
    symbol
    price
    day
    open
    high
    low
    close
    volume
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStockQueryVariables, APITypes.GetStockQuery>;
export const listStocks = /* GraphQL */ `query ListStocks(
  $filter: ModelStockFilterInput
  $limit: Int
  $nextToken: String
) {
  listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      symbol
      price
      day
      open
      high
      low
      close
      volume
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStocksQueryVariables,
  APITypes.ListStocksQuery
>;
export const getUserHolding = /* GraphQL */ `query GetUserHolding($id: ID!) {
  getUserHolding(id: $id) {
    id
    stocks
    purchasePrice
    qty
    totalValue
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserHoldingQueryVariables,
  APITypes.GetUserHoldingQuery
>;
export const listUserHoldings = /* GraphQL */ `query ListUserHoldings(
  $filter: ModelUserHoldingFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserHoldings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      stocks
      purchasePrice
      qty
      totalValue
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserHoldingsQueryVariables,
  APITypes.ListUserHoldingsQuery
>;
export const getUserPerformance = /* GraphQL */ `query GetUserPerformance($id: ID!) {
  getUserPerformance(id: $id) {
    id
    accountValue
    cash
    todayChange
    annualReturn
    performance
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserPerformanceQueryVariables,
  APITypes.GetUserPerformanceQuery
>;
export const listUserPerformances = /* GraphQL */ `query ListUserPerformances(
  $filter: ModelUserPerformanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserPerformances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      accountValue
      cash
      todayChange
      annualReturn
      performance
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserPerformancesQueryVariables,
  APITypes.ListUserPerformancesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    password
    email
    UserHistoricalTransaction {
      nextToken
      __typename
    }
    UserPerformance {
      id
      accountValue
      cash
      todayChange
      annualReturn
      performance
      createdAt
      updatedAt
      __typename
    }
    UserHolding {
      id
      stocks
      purchasePrice
      qty
      totalValue
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userUserPerformanceId
    userUserHoldingId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      password
      email
      createdAt
      updatedAt
      userUserPerformanceId
      userUserHoldingId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;

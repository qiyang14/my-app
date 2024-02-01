/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateHistoricalTransaction = /* GraphQL */ `subscription OnCreateHistoricalTransaction(
  $filter: ModelSubscriptionHistoricalTransactionFilterInput
) {
  onCreateHistoricalTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHistoricalTransactionSubscriptionVariables,
  APITypes.OnCreateHistoricalTransactionSubscription
>;
export const onUpdateHistoricalTransaction = /* GraphQL */ `subscription OnUpdateHistoricalTransaction(
  $filter: ModelSubscriptionHistoricalTransactionFilterInput
) {
  onUpdateHistoricalTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHistoricalTransactionSubscriptionVariables,
  APITypes.OnUpdateHistoricalTransactionSubscription
>;
export const onDeleteHistoricalTransaction = /* GraphQL */ `subscription OnDeleteHistoricalTransaction(
  $filter: ModelSubscriptionHistoricalTransactionFilterInput
) {
  onDeleteHistoricalTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHistoricalTransactionSubscriptionVariables,
  APITypes.OnDeleteHistoricalTransactionSubscription
>;
export const onCreateStock = /* GraphQL */ `subscription OnCreateStock($filter: ModelSubscriptionStockFilterInput) {
  onCreateStock(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStockSubscriptionVariables,
  APITypes.OnCreateStockSubscription
>;
export const onUpdateStock = /* GraphQL */ `subscription OnUpdateStock($filter: ModelSubscriptionStockFilterInput) {
  onUpdateStock(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStockSubscriptionVariables,
  APITypes.OnUpdateStockSubscription
>;
export const onDeleteStock = /* GraphQL */ `subscription OnDeleteStock($filter: ModelSubscriptionStockFilterInput) {
  onDeleteStock(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStockSubscriptionVariables,
  APITypes.OnDeleteStockSubscription
>;
export const onCreateUserHolding = /* GraphQL */ `subscription OnCreateUserHolding(
  $filter: ModelSubscriptionUserHoldingFilterInput
) {
  onCreateUserHolding(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserHoldingSubscriptionVariables,
  APITypes.OnCreateUserHoldingSubscription
>;
export const onUpdateUserHolding = /* GraphQL */ `subscription OnUpdateUserHolding(
  $filter: ModelSubscriptionUserHoldingFilterInput
) {
  onUpdateUserHolding(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserHoldingSubscriptionVariables,
  APITypes.OnUpdateUserHoldingSubscription
>;
export const onDeleteUserHolding = /* GraphQL */ `subscription OnDeleteUserHolding(
  $filter: ModelSubscriptionUserHoldingFilterInput
) {
  onDeleteUserHolding(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserHoldingSubscriptionVariables,
  APITypes.OnDeleteUserHoldingSubscription
>;
export const onCreateUserPerformance = /* GraphQL */ `subscription OnCreateUserPerformance(
  $filter: ModelSubscriptionUserPerformanceFilterInput
) {
  onCreateUserPerformance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserPerformanceSubscriptionVariables,
  APITypes.OnCreateUserPerformanceSubscription
>;
export const onUpdateUserPerformance = /* GraphQL */ `subscription OnUpdateUserPerformance(
  $filter: ModelSubscriptionUserPerformanceFilterInput
) {
  onUpdateUserPerformance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserPerformanceSubscriptionVariables,
  APITypes.OnUpdateUserPerformanceSubscription
>;
export const onDeleteUserPerformance = /* GraphQL */ `subscription OnDeleteUserPerformance(
  $filter: ModelSubscriptionUserPerformanceFilterInput
) {
  onDeleteUserPerformance(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserPerformanceSubscriptionVariables,
  APITypes.OnDeleteUserPerformanceSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;

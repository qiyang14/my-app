/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createHistoricalTransaction = /* GraphQL */ `mutation CreateHistoricalTransaction(
  $input: CreateHistoricalTransactionInput!
  $condition: ModelHistoricalTransactionConditionInput
) {
  createHistoricalTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHistoricalTransactionMutationVariables,
  APITypes.CreateHistoricalTransactionMutation
>;
export const updateHistoricalTransaction = /* GraphQL */ `mutation UpdateHistoricalTransaction(
  $input: UpdateHistoricalTransactionInput!
  $condition: ModelHistoricalTransactionConditionInput
) {
  updateHistoricalTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHistoricalTransactionMutationVariables,
  APITypes.UpdateHistoricalTransactionMutation
>;
export const deleteHistoricalTransaction = /* GraphQL */ `mutation DeleteHistoricalTransaction(
  $input: DeleteHistoricalTransactionInput!
  $condition: ModelHistoricalTransactionConditionInput
) {
  deleteHistoricalTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHistoricalTransactionMutationVariables,
  APITypes.DeleteHistoricalTransactionMutation
>;
export const createStock = /* GraphQL */ `mutation CreateStock(
  $input: CreateStockInput!
  $condition: ModelStockConditionInput
) {
  createStock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStockMutationVariables,
  APITypes.CreateStockMutation
>;
export const updateStock = /* GraphQL */ `mutation UpdateStock(
  $input: UpdateStockInput!
  $condition: ModelStockConditionInput
) {
  updateStock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStockMutationVariables,
  APITypes.UpdateStockMutation
>;
export const deleteStock = /* GraphQL */ `mutation DeleteStock(
  $input: DeleteStockInput!
  $condition: ModelStockConditionInput
) {
  deleteStock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStockMutationVariables,
  APITypes.DeleteStockMutation
>;
export const createUserHolding = /* GraphQL */ `mutation CreateUserHolding(
  $input: CreateUserHoldingInput!
  $condition: ModelUserHoldingConditionInput
) {
  createUserHolding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserHoldingMutationVariables,
  APITypes.CreateUserHoldingMutation
>;
export const updateUserHolding = /* GraphQL */ `mutation UpdateUserHolding(
  $input: UpdateUserHoldingInput!
  $condition: ModelUserHoldingConditionInput
) {
  updateUserHolding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserHoldingMutationVariables,
  APITypes.UpdateUserHoldingMutation
>;
export const deleteUserHolding = /* GraphQL */ `mutation DeleteUserHolding(
  $input: DeleteUserHoldingInput!
  $condition: ModelUserHoldingConditionInput
) {
  deleteUserHolding(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserHoldingMutationVariables,
  APITypes.DeleteUserHoldingMutation
>;
export const createUserPerformance = /* GraphQL */ `mutation CreateUserPerformance(
  $input: CreateUserPerformanceInput!
  $condition: ModelUserPerformanceConditionInput
) {
  createUserPerformance(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserPerformanceMutationVariables,
  APITypes.CreateUserPerformanceMutation
>;
export const updateUserPerformance = /* GraphQL */ `mutation UpdateUserPerformance(
  $input: UpdateUserPerformanceInput!
  $condition: ModelUserPerformanceConditionInput
) {
  updateUserPerformance(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserPerformanceMutationVariables,
  APITypes.UpdateUserPerformanceMutation
>;
export const deleteUserPerformance = /* GraphQL */ `mutation DeleteUserPerformance(
  $input: DeleteUserPerformanceInput!
  $condition: ModelUserPerformanceConditionInput
) {
  deleteUserPerformance(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserPerformanceMutationVariables,
  APITypes.DeleteUserPerformanceMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUserHolding } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserHoldingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    stocks: [],
    purchasePrice: [],
    qty: [],
    totalValue: [],
  };
  const [stocks, setStocks] = React.useState(initialValues.stocks);
  const [purchasePrice, setPurchasePrice] = React.useState(
    initialValues.purchasePrice
  );
  const [qty, setQty] = React.useState(initialValues.qty);
  const [totalValue, setTotalValue] = React.useState(initialValues.totalValue);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStocks(initialValues.stocks);
    setCurrentStocksValue("");
    setPurchasePrice(initialValues.purchasePrice);
    setCurrentPurchasePriceValue("");
    setQty(initialValues.qty);
    setCurrentQtyValue("");
    setTotalValue(initialValues.totalValue);
    setCurrentTotalValueValue("");
    setErrors({});
  };
  const [currentStocksValue, setCurrentStocksValue] = React.useState("");
  const stocksRef = React.createRef();
  const [currentPurchasePriceValue, setCurrentPurchasePriceValue] =
    React.useState("");
  const purchasePriceRef = React.createRef();
  const [currentQtyValue, setCurrentQtyValue] = React.useState("");
  const qtyRef = React.createRef();
  const [currentTotalValueValue, setCurrentTotalValueValue] =
    React.useState("");
  const totalValueRef = React.createRef();
  const validations = {
    stocks: [],
    purchasePrice: [],
    qty: [],
    totalValue: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          stocks,
          purchasePrice,
          qty,
          totalValue,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createUserHolding.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserHoldingCreateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              stocks: values,
              purchasePrice,
              qty,
              totalValue,
            };
            const result = onChange(modelFields);
            values = result?.stocks ?? values;
          }
          setStocks(values);
          setCurrentStocksValue("");
        }}
        currentFieldValue={currentStocksValue}
        label={"Stocks"}
        items={stocks}
        hasError={errors?.stocks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("stocks", currentStocksValue)
        }
        errorMessage={errors?.stocks?.errorMessage}
        setFieldValue={setCurrentStocksValue}
        inputFieldRef={stocksRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Stocks"
          isRequired={false}
          isReadOnly={false}
          value={currentStocksValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.stocks?.hasError) {
              runValidationTasks("stocks", value);
            }
            setCurrentStocksValue(value);
          }}
          onBlur={() => runValidationTasks("stocks", currentStocksValue)}
          errorMessage={errors.stocks?.errorMessage}
          hasError={errors.stocks?.hasError}
          ref={stocksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "stocks")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              stocks,
              purchasePrice: values,
              qty,
              totalValue,
            };
            const result = onChange(modelFields);
            values = result?.purchasePrice ?? values;
          }
          setPurchasePrice(values);
          setCurrentPurchasePriceValue("");
        }}
        currentFieldValue={currentPurchasePriceValue}
        label={"Purchase price"}
        items={purchasePrice}
        hasError={errors?.purchasePrice?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("purchasePrice", currentPurchasePriceValue)
        }
        errorMessage={errors?.purchasePrice?.errorMessage}
        setFieldValue={setCurrentPurchasePriceValue}
        inputFieldRef={purchasePriceRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Purchase price"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPurchasePriceValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.purchasePrice?.hasError) {
              runValidationTasks("purchasePrice", value);
            }
            setCurrentPurchasePriceValue(value);
          }}
          onBlur={() =>
            runValidationTasks("purchasePrice", currentPurchasePriceValue)
          }
          errorMessage={errors.purchasePrice?.errorMessage}
          hasError={errors.purchasePrice?.hasError}
          ref={purchasePriceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "purchasePrice")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              stocks,
              purchasePrice,
              qty: values,
              totalValue,
            };
            const result = onChange(modelFields);
            values = result?.qty ?? values;
          }
          setQty(values);
          setCurrentQtyValue("");
        }}
        currentFieldValue={currentQtyValue}
        label={"Qty"}
        items={qty}
        hasError={errors?.qty?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("qty", currentQtyValue)
        }
        errorMessage={errors?.qty?.errorMessage}
        setFieldValue={setCurrentQtyValue}
        inputFieldRef={qtyRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Qty"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentQtyValue}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (errors.qty?.hasError) {
              runValidationTasks("qty", value);
            }
            setCurrentQtyValue(value);
          }}
          onBlur={() => runValidationTasks("qty", currentQtyValue)}
          errorMessage={errors.qty?.errorMessage}
          hasError={errors.qty?.hasError}
          ref={qtyRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "qty")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              stocks,
              purchasePrice,
              qty,
              totalValue: values,
            };
            const result = onChange(modelFields);
            values = result?.totalValue ?? values;
          }
          setTotalValue(values);
          setCurrentTotalValueValue("");
        }}
        currentFieldValue={currentTotalValueValue}
        label={"Total value"}
        items={totalValue}
        hasError={errors?.totalValue?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("totalValue", currentTotalValueValue)
        }
        errorMessage={errors?.totalValue?.errorMessage}
        setFieldValue={setCurrentTotalValueValue}
        inputFieldRef={totalValueRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Total value"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentTotalValueValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.totalValue?.hasError) {
              runValidationTasks("totalValue", value);
            }
            setCurrentTotalValueValue(value);
          }}
          onBlur={() =>
            runValidationTasks("totalValue", currentTotalValueValue)
          }
          errorMessage={errors.totalValue?.errorMessage}
          hasError={errors.totalValue?.hasError}
          ref={totalValueRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "totalValue")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

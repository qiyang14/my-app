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
import { createStock } from "../graphql/mutations";
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
export default function StockCreateForm(props) {
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
    symbol: "",
    price: [],
    day: "",
    open: [],
    high: [],
    low: [],
    close: [],
    volume: [],
  };
  const [symbol, setSymbol] = React.useState(initialValues.symbol);
  const [price, setPrice] = React.useState(initialValues.price);
  const [day, setDay] = React.useState(initialValues.day);
  const [open, setOpen] = React.useState(initialValues.open);
  const [high, setHigh] = React.useState(initialValues.high);
  const [low, setLow] = React.useState(initialValues.low);
  const [close, setClose] = React.useState(initialValues.close);
  const [volume, setVolume] = React.useState(initialValues.volume);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSymbol(initialValues.symbol);
    setPrice(initialValues.price);
    setCurrentPriceValue("");
    setDay(initialValues.day);
    setOpen(initialValues.open);
    setCurrentOpenValue("");
    setHigh(initialValues.high);
    setCurrentHighValue("");
    setLow(initialValues.low);
    setCurrentLowValue("");
    setClose(initialValues.close);
    setCurrentCloseValue("");
    setVolume(initialValues.volume);
    setCurrentVolumeValue("");
    setErrors({});
  };
  const [currentPriceValue, setCurrentPriceValue] = React.useState("");
  const priceRef = React.createRef();
  const [currentOpenValue, setCurrentOpenValue] = React.useState("");
  const openRef = React.createRef();
  const [currentHighValue, setCurrentHighValue] = React.useState("");
  const highRef = React.createRef();
  const [currentLowValue, setCurrentLowValue] = React.useState("");
  const lowRef = React.createRef();
  const [currentCloseValue, setCurrentCloseValue] = React.useState("");
  const closeRef = React.createRef();
  const [currentVolumeValue, setCurrentVolumeValue] = React.useState("");
  const volumeRef = React.createRef();
  const validations = {
    symbol: [],
    price: [],
    day: [],
    open: [],
    high: [],
    low: [],
    close: [],
    volume: [],
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
          symbol,
          price,
          day,
          open,
          high,
          low,
          close,
          volume,
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
            query: createStock.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "StockCreateForm")}
      {...rest}
    >
      <TextField
        label="Symbol"
        isRequired={false}
        isReadOnly={false}
        value={symbol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              symbol: value,
              price,
              day,
              open,
              high,
              low,
              close,
              volume,
            };
            const result = onChange(modelFields);
            value = result?.symbol ?? value;
          }
          if (errors.symbol?.hasError) {
            runValidationTasks("symbol", value);
          }
          setSymbol(value);
        }}
        onBlur={() => runValidationTasks("symbol", symbol)}
        errorMessage={errors.symbol?.errorMessage}
        hasError={errors.symbol?.hasError}
        {...getOverrideProps(overrides, "symbol")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              symbol,
              price: values,
              day,
              open,
              high,
              low,
              close,
              volume,
            };
            const result = onChange(modelFields);
            values = result?.price ?? values;
          }
          setPrice(values);
          setCurrentPriceValue("");
        }}
        currentFieldValue={currentPriceValue}
        label={"Price"}
        items={price}
        hasError={errors?.price?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("price", currentPriceValue)
        }
        errorMessage={errors?.price?.errorMessage}
        setFieldValue={setCurrentPriceValue}
        inputFieldRef={priceRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Price"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPriceValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.price?.hasError) {
              runValidationTasks("price", value);
            }
            setCurrentPriceValue(value);
          }}
          onBlur={() => runValidationTasks("price", currentPriceValue)}
          errorMessage={errors.price?.errorMessage}
          hasError={errors.price?.hasError}
          ref={priceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "price")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Day"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={day}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              symbol,
              price,
              day: value,
              open,
              high,
              low,
              close,
              volume,
            };
            const result = onChange(modelFields);
            value = result?.day ?? value;
          }
          if (errors.day?.hasError) {
            runValidationTasks("day", value);
          }
          setDay(value);
        }}
        onBlur={() => runValidationTasks("day", day)}
        errorMessage={errors.day?.errorMessage}
        hasError={errors.day?.hasError}
        {...getOverrideProps(overrides, "day")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              symbol,
              price,
              day,
              open: values,
              high,
              low,
              close,
              volume,
            };
            const result = onChange(modelFields);
            values = result?.open ?? values;
          }
          setOpen(values);
          setCurrentOpenValue("");
        }}
        currentFieldValue={currentOpenValue}
        label={"Open"}
        items={open}
        hasError={errors?.open?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("open", currentOpenValue)
        }
        errorMessage={errors?.open?.errorMessage}
        setFieldValue={setCurrentOpenValue}
        inputFieldRef={openRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Open"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentOpenValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.open?.hasError) {
              runValidationTasks("open", value);
            }
            setCurrentOpenValue(value);
          }}
          onBlur={() => runValidationTasks("open", currentOpenValue)}
          errorMessage={errors.open?.errorMessage}
          hasError={errors.open?.hasError}
          ref={openRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "open")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              symbol,
              price,
              day,
              open,
              high: values,
              low,
              close,
              volume,
            };
            const result = onChange(modelFields);
            values = result?.high ?? values;
          }
          setHigh(values);
          setCurrentHighValue("");
        }}
        currentFieldValue={currentHighValue}
        label={"High"}
        items={high}
        hasError={errors?.high?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("high", currentHighValue)
        }
        errorMessage={errors?.high?.errorMessage}
        setFieldValue={setCurrentHighValue}
        inputFieldRef={highRef}
        defaultFieldValue={""}
      >
        <TextField
          label="High"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentHighValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.high?.hasError) {
              runValidationTasks("high", value);
            }
            setCurrentHighValue(value);
          }}
          onBlur={() => runValidationTasks("high", currentHighValue)}
          errorMessage={errors.high?.errorMessage}
          hasError={errors.high?.hasError}
          ref={highRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "high")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              symbol,
              price,
              day,
              open,
              high,
              low: values,
              close,
              volume,
            };
            const result = onChange(modelFields);
            values = result?.low ?? values;
          }
          setLow(values);
          setCurrentLowValue("");
        }}
        currentFieldValue={currentLowValue}
        label={"Low"}
        items={low}
        hasError={errors?.low?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("low", currentLowValue)
        }
        errorMessage={errors?.low?.errorMessage}
        setFieldValue={setCurrentLowValue}
        inputFieldRef={lowRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Low"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentLowValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.low?.hasError) {
              runValidationTasks("low", value);
            }
            setCurrentLowValue(value);
          }}
          onBlur={() => runValidationTasks("low", currentLowValue)}
          errorMessage={errors.low?.errorMessage}
          hasError={errors.low?.hasError}
          ref={lowRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "low")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              symbol,
              price,
              day,
              open,
              high,
              low,
              close: values,
              volume,
            };
            const result = onChange(modelFields);
            values = result?.close ?? values;
          }
          setClose(values);
          setCurrentCloseValue("");
        }}
        currentFieldValue={currentCloseValue}
        label={"Close"}
        items={close}
        hasError={errors?.close?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("close", currentCloseValue)
        }
        errorMessage={errors?.close?.errorMessage}
        setFieldValue={setCurrentCloseValue}
        inputFieldRef={closeRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Close"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentCloseValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.close?.hasError) {
              runValidationTasks("close", value);
            }
            setCurrentCloseValue(value);
          }}
          onBlur={() => runValidationTasks("close", currentCloseValue)}
          errorMessage={errors.close?.errorMessage}
          hasError={errors.close?.hasError}
          ref={closeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "close")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              symbol,
              price,
              day,
              open,
              high,
              low,
              close,
              volume: values,
            };
            const result = onChange(modelFields);
            values = result?.volume ?? values;
          }
          setVolume(values);
          setCurrentVolumeValue("");
        }}
        currentFieldValue={currentVolumeValue}
        label={"Volume"}
        items={volume}
        hasError={errors?.volume?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("volume", currentVolumeValue)
        }
        errorMessage={errors?.volume?.errorMessage}
        setFieldValue={setCurrentVolumeValue}
        inputFieldRef={volumeRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Volume"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentVolumeValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.volume?.hasError) {
              runValidationTasks("volume", value);
            }
            setCurrentVolumeValue(value);
          }}
          onBlur={() => runValidationTasks("volume", currentVolumeValue)}
          errorMessage={errors.volume?.errorMessage}
          hasError={errors.volume?.hasError}
          ref={volumeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "volume")}
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

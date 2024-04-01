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
import { getUserPerformance } from "../graphql/queries";
import { updateUserPerformance } from "../graphql/mutations";
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
export default function UserPerformanceUpdateForm(props) {
  const {
    id: idProp,
    userPerformance: userPerformanceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    accountValue: "",
    cash: "",
    todayChange: "",
    annualReturn: "",
    performance: [],
  };
  const [accountValue, setAccountValue] = React.useState(
    initialValues.accountValue
  );
  const [cash, setCash] = React.useState(initialValues.cash);
  const [todayChange, setTodayChange] = React.useState(
    initialValues.todayChange
  );
  const [annualReturn, setAnnualReturn] = React.useState(
    initialValues.annualReturn
  );
  const [performance, setPerformance] = React.useState(
    initialValues.performance
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userPerformanceRecord
      ? { ...initialValues, ...userPerformanceRecord }
      : initialValues;
    setAccountValue(cleanValues.accountValue);
    setCash(cleanValues.cash);
    setTodayChange(cleanValues.todayChange);
    setAnnualReturn(cleanValues.annualReturn);
    setPerformance(cleanValues.performance ?? []);
    setCurrentPerformanceValue("");
    setErrors({});
  };
  const [userPerformanceRecord, setUserPerformanceRecord] = React.useState(
    userPerformanceModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserPerformance.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserPerformance
        : userPerformanceModelProp;
      setUserPerformanceRecord(record);
    };
    queryData();
  }, [idProp, userPerformanceModelProp]);
  React.useEffect(resetStateValues, [userPerformanceRecord]);
  const [currentPerformanceValue, setCurrentPerformanceValue] =
    React.useState("");
  const performanceRef = React.createRef();
  const validations = {
    accountValue: [],
    cash: [],
    todayChange: [],
    annualReturn: [],
    performance: [],
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
          accountValue: accountValue ?? null,
          cash: cash ?? null,
          todayChange: todayChange ?? null,
          annualReturn: annualReturn ?? null,
          performance: performance ?? null,
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
            query: updateUserPerformance.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userPerformanceRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserPerformanceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Account value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={accountValue}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              accountValue: value,
              cash,
              todayChange,
              annualReturn,
              performance,
            };
            const result = onChange(modelFields);
            value = result?.accountValue ?? value;
          }
          if (errors.accountValue?.hasError) {
            runValidationTasks("accountValue", value);
          }
          setAccountValue(value);
        }}
        onBlur={() => runValidationTasks("accountValue", accountValue)}
        errorMessage={errors.accountValue?.errorMessage}
        hasError={errors.accountValue?.hasError}
        {...getOverrideProps(overrides, "accountValue")}
      ></TextField>
      <TextField
        label="Cash"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cash}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              accountValue,
              cash: value,
              todayChange,
              annualReturn,
              performance,
            };
            const result = onChange(modelFields);
            value = result?.cash ?? value;
          }
          if (errors.cash?.hasError) {
            runValidationTasks("cash", value);
          }
          setCash(value);
        }}
        onBlur={() => runValidationTasks("cash", cash)}
        errorMessage={errors.cash?.errorMessage}
        hasError={errors.cash?.hasError}
        {...getOverrideProps(overrides, "cash")}
      ></TextField>
      <TextField
        label="Today change"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={todayChange}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              accountValue,
              cash,
              todayChange: value,
              annualReturn,
              performance,
            };
            const result = onChange(modelFields);
            value = result?.todayChange ?? value;
          }
          if (errors.todayChange?.hasError) {
            runValidationTasks("todayChange", value);
          }
          setTodayChange(value);
        }}
        onBlur={() => runValidationTasks("todayChange", todayChange)}
        errorMessage={errors.todayChange?.errorMessage}
        hasError={errors.todayChange?.hasError}
        {...getOverrideProps(overrides, "todayChange")}
      ></TextField>
      <TextField
        label="Annual return"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={annualReturn}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              accountValue,
              cash,
              todayChange,
              annualReturn: value,
              performance,
            };
            const result = onChange(modelFields);
            value = result?.annualReturn ?? value;
          }
          if (errors.annualReturn?.hasError) {
            runValidationTasks("annualReturn", value);
          }
          setAnnualReturn(value);
        }}
        onBlur={() => runValidationTasks("annualReturn", annualReturn)}
        errorMessage={errors.annualReturn?.errorMessage}
        hasError={errors.annualReturn?.hasError}
        {...getOverrideProps(overrides, "annualReturn")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              accountValue,
              cash,
              todayChange,
              annualReturn,
              performance: values,
            };
            const result = onChange(modelFields);
            values = result?.performance ?? values;
          }
          setPerformance(values);
          setCurrentPerformanceValue("");
        }}
        currentFieldValue={currentPerformanceValue}
        label={"Performance"}
        items={performance}
        hasError={errors?.performance?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("performance", currentPerformanceValue)
        }
        errorMessage={errors?.performance?.errorMessage}
        setFieldValue={setCurrentPerformanceValue}
        inputFieldRef={performanceRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Performance"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPerformanceValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.performance?.hasError) {
              runValidationTasks("performance", value);
            }
            setCurrentPerformanceValue(value);
          }}
          onBlur={() =>
            runValidationTasks("performance", currentPerformanceValue)
          }
          errorMessage={errors.performance?.errorMessage}
          hasError={errors.performance?.hasError}
          ref={performanceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "performance")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userPerformanceModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userPerformanceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

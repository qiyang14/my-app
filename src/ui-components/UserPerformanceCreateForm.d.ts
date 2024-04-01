/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserPerformanceCreateFormInputValues = {
    accountValue?: number;
    cash?: number;
    todayChange?: number;
    annualReturn?: number;
    performance?: number[];
};
export declare type UserPerformanceCreateFormValidationValues = {
    accountValue?: ValidationFunction<number>;
    cash?: ValidationFunction<number>;
    todayChange?: ValidationFunction<number>;
    annualReturn?: ValidationFunction<number>;
    performance?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPerformanceCreateFormOverridesProps = {
    UserPerformanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    accountValue?: PrimitiveOverrideProps<TextFieldProps>;
    cash?: PrimitiveOverrideProps<TextFieldProps>;
    todayChange?: PrimitiveOverrideProps<TextFieldProps>;
    annualReturn?: PrimitiveOverrideProps<TextFieldProps>;
    performance?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserPerformanceCreateFormProps = React.PropsWithChildren<{
    overrides?: UserPerformanceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserPerformanceCreateFormInputValues) => UserPerformanceCreateFormInputValues;
    onSuccess?: (fields: UserPerformanceCreateFormInputValues) => void;
    onError?: (fields: UserPerformanceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPerformanceCreateFormInputValues) => UserPerformanceCreateFormInputValues;
    onValidate?: UserPerformanceCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserPerformanceCreateForm(props: UserPerformanceCreateFormProps): React.ReactElement;

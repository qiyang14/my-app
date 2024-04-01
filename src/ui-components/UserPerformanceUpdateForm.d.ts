/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserPerformance } from "../API.ts";
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
export declare type UserPerformanceUpdateFormInputValues = {
    accountValue?: number;
    cash?: number;
    todayChange?: number;
    annualReturn?: number;
    performance?: number[];
};
export declare type UserPerformanceUpdateFormValidationValues = {
    accountValue?: ValidationFunction<number>;
    cash?: ValidationFunction<number>;
    todayChange?: ValidationFunction<number>;
    annualReturn?: ValidationFunction<number>;
    performance?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPerformanceUpdateFormOverridesProps = {
    UserPerformanceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    accountValue?: PrimitiveOverrideProps<TextFieldProps>;
    cash?: PrimitiveOverrideProps<TextFieldProps>;
    todayChange?: PrimitiveOverrideProps<TextFieldProps>;
    annualReturn?: PrimitiveOverrideProps<TextFieldProps>;
    performance?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserPerformanceUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserPerformanceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userPerformance?: UserPerformance;
    onSubmit?: (fields: UserPerformanceUpdateFormInputValues) => UserPerformanceUpdateFormInputValues;
    onSuccess?: (fields: UserPerformanceUpdateFormInputValues) => void;
    onError?: (fields: UserPerformanceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPerformanceUpdateFormInputValues) => UserPerformanceUpdateFormInputValues;
    onValidate?: UserPerformanceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserPerformanceUpdateForm(props: UserPerformanceUpdateFormProps): React.ReactElement;

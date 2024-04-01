/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Stock } from "../API.ts";
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
export declare type StockUpdateFormInputValues = {
    symbol?: string;
    price?: number[];
    day?: number;
    open?: number[];
    high?: number[];
    low?: number[];
    close?: number[];
    volume?: number[];
};
export declare type StockUpdateFormValidationValues = {
    symbol?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    day?: ValidationFunction<number>;
    open?: ValidationFunction<number>;
    high?: ValidationFunction<number>;
    low?: ValidationFunction<number>;
    close?: ValidationFunction<number>;
    volume?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockUpdateFormOverridesProps = {
    StockUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    symbol?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
    open?: PrimitiveOverrideProps<TextFieldProps>;
    high?: PrimitiveOverrideProps<TextFieldProps>;
    low?: PrimitiveOverrideProps<TextFieldProps>;
    close?: PrimitiveOverrideProps<TextFieldProps>;
    volume?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockUpdateFormProps = React.PropsWithChildren<{
    overrides?: StockUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stock?: Stock;
    onSubmit?: (fields: StockUpdateFormInputValues) => StockUpdateFormInputValues;
    onSuccess?: (fields: StockUpdateFormInputValues) => void;
    onError?: (fields: StockUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockUpdateFormInputValues) => StockUpdateFormInputValues;
    onValidate?: StockUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StockUpdateForm(props: StockUpdateFormProps): React.ReactElement;

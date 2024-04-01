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
export declare type UserHoldingCreateFormInputValues = {
    stocks?: string[];
    purchasePrice?: number[];
    qty?: number[];
    totalValue?: number[];
};
export declare type UserHoldingCreateFormValidationValues = {
    stocks?: ValidationFunction<string>;
    purchasePrice?: ValidationFunction<number>;
    qty?: ValidationFunction<number>;
    totalValue?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserHoldingCreateFormOverridesProps = {
    UserHoldingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    stocks?: PrimitiveOverrideProps<TextFieldProps>;
    purchasePrice?: PrimitiveOverrideProps<TextFieldProps>;
    qty?: PrimitiveOverrideProps<TextFieldProps>;
    totalValue?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserHoldingCreateFormProps = React.PropsWithChildren<{
    overrides?: UserHoldingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserHoldingCreateFormInputValues) => UserHoldingCreateFormInputValues;
    onSuccess?: (fields: UserHoldingCreateFormInputValues) => void;
    onError?: (fields: UserHoldingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserHoldingCreateFormInputValues) => UserHoldingCreateFormInputValues;
    onValidate?: UserHoldingCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserHoldingCreateForm(props: UserHoldingCreateFormProps): React.ReactElement;

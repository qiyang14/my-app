/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserHolding } from "../API.ts";
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
export declare type UserHoldingUpdateFormInputValues = {
    stocks?: string[];
    purchasePrice?: number[];
    qty?: number[];
    totalValue?: number[];
};
export declare type UserHoldingUpdateFormValidationValues = {
    stocks?: ValidationFunction<string>;
    purchasePrice?: ValidationFunction<number>;
    qty?: ValidationFunction<number>;
    totalValue?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserHoldingUpdateFormOverridesProps = {
    UserHoldingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    stocks?: PrimitiveOverrideProps<TextFieldProps>;
    purchasePrice?: PrimitiveOverrideProps<TextFieldProps>;
    qty?: PrimitiveOverrideProps<TextFieldProps>;
    totalValue?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserHoldingUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserHoldingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userHolding?: UserHolding;
    onSubmit?: (fields: UserHoldingUpdateFormInputValues) => UserHoldingUpdateFormInputValues;
    onSuccess?: (fields: UserHoldingUpdateFormInputValues) => void;
    onError?: (fields: UserHoldingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserHoldingUpdateFormInputValues) => UserHoldingUpdateFormInputValues;
    onValidate?: UserHoldingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserHoldingUpdateForm(props: UserHoldingUpdateFormProps): React.ReactElement;

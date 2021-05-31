import React, { useRef, useEffect, useState, useCallback } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import {
    Stack,
    RadioButton,
    TextField,
    Button,
    DatePicker,
} from "@shopify/polaris";
import Input from "./Input";
import InputTag from "./InputTag";

const DiscountForm = () => {
    const [value, setValue] = useState("disabled");

    const handleChange = useCallback(
        (_checked, newValue) => setValue(newValue),
        []
    );
    const renderInput = () => {
        if (value === "flatDiscount") {
            return <Input />;
        } else {
            return <InputTag />;
        }
    };
    console.log("test", value);
    return (
        <Stack vertical>
            <RadioButton
                label="Flat Discount"
                helpText="Customers will only be able to check out as guests."
                checked={value === "flatDiscount"}
                id="flatDiscount"
                name="accounts"
                onChange={handleChange}
            />
            <RadioButton
                label="Discount Based On Tag"
                helpText="Customers will be able to check out with a customer account or as a guest."
                id="basedOnTag"
                name="accounts"
                checked={value === "basedOnTag"}
                onChange={handleChange}
            />

            {renderInput()}
        </Stack>
    );
};
export default DiscountForm;

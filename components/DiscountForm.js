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
const FLAT_DISCOUNT_RADIO = "FLAT_DISCOUNT_RADIO";
const BASED_ON_TAG_RADIO = "BASED_ON_TAG_RADIO";
const DiscountForm = () => {
    const [value, setValue] = useState(FLAT_DISCOUNT_RADIO);

    const handleChange = useCallback(
        (_checked, newValue) => setValue(newValue),
        []
    );
    const renderInput = () => {
        if (value === FLAT_DISCOUNT_RADIO) {
            return <Input title="Flat Discount" type="number" prefix="%" />;
        } else {
            return <InputTag title="Discount Based On Tag" />;
        }
    };

    return (
        <Stack vertical>
            <RadioButton
                label="Flat Discount"
                helpText="Customers will only be able to check out as guests."
                checked={value === "flatDiscount"}
                id={FLAT_DISCOUNT_RADIO}
                name={FLAT_DISCOUNT_RADIO}
                checked={value === FLAT_DISCOUNT_RADIO}
                onChange={handleChange}
            />
            <RadioButton
                label="Discount Based On Tag"
                helpText="Customers will be able to check out with a customer account or as a guest."
                id={BASED_ON_TAG_RADIO}
                name={BASED_ON_TAG_RADIO}
                checked={value === BASED_ON_TAG_RADIO}
                onChange={handleChange}
            />

            {renderInput()}
        </Stack>
    );
};
export default DiscountForm;

import React, { useRef, useEffect, useState, useCallback } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "@shopify/polaris";
import { useQuery } from "@apollo/react-hooks";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import { TextField, Button } from "@shopify/polaris";

const Input = () => {
    const [value, setValue] = useState("Start date");

    const handleChange = useCallback((newValue) => setValue(newValue), []);

    return <TextField label="Time" value={value} onChange={handleChange} />;
};

export default Input;
